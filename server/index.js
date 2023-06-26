require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/user");
const Place = require("./models/places");
const Booking = require("./models/bookings");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const imageDownloader = require("image-downloader");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const mime = require("mime");
const fs = require("fs");
const cron = require("node-cron");
const multer = require("multer");

const app = express();
const bcryptSalt = bcrypt.genSaltSync(10);

const jwtSecret = "fhasd89sa7duasda23131";
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'https://koselig.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use("/api/uploads", express.static(__dirname + "/uploads"));
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = ["https://koselig.vercel.app"];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 204,
  credentials: true,
};

app.use(cors(corsOptions));

async function uploadToS3(path, originalFilename, mimetype) {
  const client = new S3Client({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
  });
  const parts = originalFilename.split(".");
  const ext = parts[parts.length - 1];
  const newFilename = Date.now() + "." + ext;
  await client.send(
    new PutObjectCommand({
      Bucket: "koselig-wojciech",
      Body: fs.readFileSync(path),
      Key: newFilename,
      ContentType: mimetype,
      ACL: "public-read",
    })
  );
  return `https://koselig-wojciech.s3.amazonaws.com/${newFilename}`;
}

function getUserDataFromReq(req) {
  return new Promise((resolve, reject) => {
    jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err;
      resolve(userData);
    });
  });
}

app.get("/api/test", (req, res) => {
  mongoose.connect(process.env.MONGO_URL, () => {
    console.log("connected with MongoDb");
    res.json("ok");
  });
});

// Register
app.post("/api/register", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { name, email, password } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
  }
});

// Login
app.post("/api/login", async (req, res) => {
  mongoose.connect(process.env.MONGO_URL);
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        jwtSecret
      );
      res.cookie("token", token, { httpOnly: true });
      res.json({ success: true });
    } else {
      res.status(422).json({ error: "Invalid email or password" });
    }
  } catch (e) {
    res.status(422).json(e);
  }
});

// Logout
app.get("/api/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ success: true });
});

// Get user data
app.get("/api/user", async (req, res) => {
  try {
    const userData = await getUserDataFromReq(req);
    const user = await User.findById(userData.userId, "-password");
    res.json(user);
  } catch (e) {
    res.status(401).json({ error: "Unauthorized" });
  }
});

// Get places
app.get("/api/places", async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Get place by ID
app.get("/api/places/:id", async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    res.json(place);
  } catch (e) {
    res.status(404).json({ error: "Place not found" });
  }
});

// Create place
app.post("/api/places", async (req, res) => {
  try {
    const userData = await getUserDataFromReq(req);
    const user = await User.findById(userData.userId);

    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const { title, description, price, location, image } = req.body;

    const imagePath = `./uploads/${Date.now()}.jpg`;
    await imageDownloader.image({
      url: image,
      dest: imagePath,
    });

    const imageUrl = await uploadToS3(
      imagePath,
      "image.jpg",
      mime.getType(imagePath)
    );

    fs.unlinkSync(imagePath);

    const place = await Place.create({
      title,
      description,
      price,
      location,
      image: imageUrl,
      user: user._id,
    });

    res.json(place);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Update place
app.put("/api/places/:id", async (req, res) => {
  try {
    const userData = await getUserDataFromReq(req);
    const user = await User.findById(userData.userId);

    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const place = await Place.findById(req.params.id);

    if (!place) {
      res.status(404).json({ error: "Place not found" });
      return;
    }

    if (place.user.toString() !== user._id.toString()) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const { title, description, price, location, image } = req.body;

    let imageUrl = place.image;

    if (image && image !== place.image) {
      const imagePath = `./uploads/${Date.now()}.jpg`;
      await imageDownloader.image({
        url: image,
        dest: imagePath,
      });

      imageUrl = await uploadToS3(
        imagePath,
        "image.jpg",
        mime.getType(imagePath)
      );

      fs.unlinkSync(imagePath);
    }

    place.title = title || place.title;
    place.description = description || place.description;
    place.price = price || place.price;
    place.location = location || place.location;
    place.image = imageUrl;

    await place.save();

    res.json(place);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Delete place
app.delete("/api/places/:id", async (req, res) => {
  try {
    const userData = await getUserDataFromReq(req);
    const user = await User.findById(userData.userId);

    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const place = await Place.findById(req.params.id);

    if (!place) {
      res.status(404).json({ error: "Place not found" });
      return;
    }

    if (place.user.toString() !== user._id.toString()) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    await place.delete();

    res.json({ success: true });
  } catch (e) {
    res.status(500).json(e);
  }
});

// Create booking
app.post("/api/bookings", async (req, res) => {
  try {
    const userData = await getUserDataFromReq(req);
    const user = await User.findById(userData.userId);

    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const { placeId, startDate, endDate } = req.body;

    const place = await Place.findById(placeId);

    if (!place) {
      res.status(404).json({ error: "Place not found" });
      return;
    }

    const booking = await Booking.create({
      user: user._id,
      place: place._id,
      startDate,
      endDate,
    });

    res.json(booking);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Get bookings by user
app.get("/api/bookings", async (req, res) => {
  try {
    const userData = await getUserDataFromReq(req);
    const user = await User.findById(userData.userId);

    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const bookings = await Booking.find({ user: user._id })
      .populate("user", "-password")
      .populate("place");

    res.json(bookings);
  } catch (e) {
    res.status(500).json(e);
  }
});

// Delete booking
app.delete("/api/bookings/:id", async (req, res) => {
  try {
    const userData = await getUserDataFromReq(req);
    const user = await User.findById(userData.userId);

    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      res.status(404).json({ error: "Booking not found" });
      return;
    }

    if (booking.user.toString() !== user._id.toString()) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    await booking.delete();

    res.json({ success: true });
  } catch (e) {
    res.status(500).json(e);
  }
});

// Run the server
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});