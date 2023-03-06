import React, { useEffect, useState } from "react";
import Perks from "../components/Perks";
import { useParams } from "react-router-dom";
import { AiOutlineUpload, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsSave, BsTrash } from "react-icons/bs";
import axios from "axios";
import AccountNavigation from "../components/AccountNavigation";
import Images from "../components/Images";

const PlacesForm = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [price, setPrice] = useState(100);
  const [maxGuests, setMaxGuests] = useState(1);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(/places/ + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setPrice(data.price);
    });
  }, [id]);

  const addPhotoByLink = async (e) => {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhotos((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  };
  const uploadPhoto = async (e) => {
    e.preventDefault();
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post("/upload", data, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then((response) => {
        const { data: filenames } = response;
        setAddedPhotos((prev) => {
          return [...prev, ...filenames];
        });
      });
  };

  async function savePlace(ev) {
    ev.preventDefault();
    const placeData = {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    };
    if (id) {
      // update
      await axios.put("/places", {
        id,
        ...placeData,
      });
      setRedirect(true);
      window.location.replace("/account/places");
    } else {
      // new place
      await axios.post(
        "/places",
        placeData,
        window.location.replace("/account/places")
      );
    }
  }
  function selectAsMainPhoto(ev, filename) {
    ev.preventDefault();
    setAddedPhotos([
      filename,
      ...addedPhotos.filter((photo) => photo !== filename),
    ]);
  }
  function removePhoto(ev, filename) {
    ev.preventDefault();
    setAddedPhotos(prev => prev.filter(photo => photo !== filename));
  }

  return (
    <div className="pt-28 px-2">
      <AccountNavigation />
      <div className="flex justify-center py-10 ">
        <form className="flex flex-col gap-3  mx-auto w-4/5 sm:w-full" onSubmit={savePlace}>
          <label className="text-gray-600 font-medium pl-2 text-xl sm:text-lg">
            Title:
          </label>
          <input
            type="text"
            placeholder="Title for you lovely place"
            className="py-3 px-3 rounded-full shadow-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="text-gray-600 font-medium pl-2 text-xl sm:text-lg">
            Address:
          </label>
          <input
            type="text"
            placeholder="Adress to your place"
            className="py-3 px-3 rounded-full shadow-md"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <label className="text-gray-600 font-medium pl-2 text-xl sm:text-lg">
            Description:
          </label>
          <textarea
            placeholder="Write some information about you place"
            className="w-full h-[20vh] border-2 px-2 border-gray-50 rounded-xl shadow-xl"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className="text-gray-600 font-medium pl-2 text-xl sm:text-lg">
            Photos:
          </label>
          <div className="flex gap-3 w-full">
            <input
              type="text"
              placeholder="Add your photos"
              className="py-3 px-3 rounded-full shadow-md w-2/3 xs:w-[60%]"
              value={photoLink}
              onChange={(e) => setPhotoLink(e.target.value)}
            />
            <button
              className="bg-black text-white roun px-3 py-2  shadow-lg font-bold sm:text-sm"
              onClick={addPhotoByLink}
            >
              Add photo
            </button>
          </div>
          <div className=" grid sm:grid-cols-3 md:grid-cols-4 grid-cols-4 gap-2">
            {addedPhotos.length > 0 &&
              addedPhotos.map((link, i) => (
                <div className="relative h-60" key={link + i}>
                  <button
                    className="absolute w-7 h-7 rounded-lg bg-red-500 bottom-2 right-2 fill-white flex justify-center items-center cursor-pointer hover:opacity-50"
                    onClick={(ev) => removePhoto(ev, link)}
                  >
                    <BsTrash className="fill-white w-4 h-4" />
                  </button>
                  <button
                    className="absolute w-7 h-7 rounded-lg bg-black bottom-2 right-10 fill-white flex justify-center items-center cursor-pointer "
                    onClick={(ev) => selectAsMainPhoto(ev, link)}
                  >
                    {link === addedPhotos[0] && (
                      <AiFillStar className=" w-4 h-4 fill-yellow-300" />
                    )}
                    {link !== addedPhotos[0] && (
                      <AiOutlineStar className="fill-white w-4 h-4 " />
                    )}
                  </button>
                  <Images src={link} alt={""} />
                </div>
              ))}

            <label className="cursor-pointer !bg-gray-300 hover:bg-teal-500 transition ease-in-out delay-150 text-white py-2  border bg-transparent items-center flex justify-center rounded-lg shadow-lg   font-bold  gap-2 ">
              {" "}
              <input type="file" className="hidden " onChange={uploadPhoto} />
              <AiOutlineUpload className="text-2xl" />
              Upload
            </label>
          </div>

          <Perks selected={perks} onChange={setPerks} />
          <label className="text-gray-600 font-medium pl-2 text-xl">
            Extra info:
          </label>
          <textarea
            placeholder="Write some extra information about you place"
            className="w-full border-2 px-2 border-gray-50 rounded-xl shadow-xl"
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
          />
          <label className="text-gray-600 font-medium  text-xl">
            Check in and out :
          </label>
          <div className=" grid lg:grid-cols-2 grid-cols-4 gap-2">
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium  text-lg  sm:text-sm pb-2">
                Check in :
              </label>
              <input
                type="text"
                placeholder="14"
                className="border-2 border-gray-200 rounded-lg px-1 py-1"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium  text-lg sm:text-sm pb-2">
                Check out:
              </label>
              <input
                type="text"
                placeholder="12"
                className="border-2 border-gray-200 rounded-lg px-1 py-1"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium text-lg sm:text-sm pb-2">
                Max number of guest:
              </label>
              <input
                type="number"
                placeholder="from 1 to 20 "
                className="border-2 border-gray-200 rounded-lg px-1 py-1"
                value={maxGuests}
                onChange={(e) => setMaxGuests(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-gray-600 font-medium text-lg sm:text-sm pb-2">
                Price per night:
              </label>
              <input
                type="number"
                placeholder="from 1 to 20 "
                className="border-2 border-gray-200 rounded-lg px-1 py-1"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className=" flex justify-center items-center mt-10">
            <button
              className=" !bg-black transition ease-in-out delay-150 text-white inline-flex justify-center items-center border px-10 py-2  gap-2 "
              onClick={savePlace}
            >
              <BsSave />
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlacesForm;
