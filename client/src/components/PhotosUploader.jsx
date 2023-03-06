import React, { useState } from "react";
import axios from "axios";
import { AiOutlineUpload } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Images from "./Images";

const PhotosUploader = ({addedPhotos,onChange}) => {
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");

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
  return (
    <>
    <label className="text-gray-600 font-medium pl-2 text-xl">
    Photos:
  </label>
  <div className="flex gap-3 w-full">
    <input
      type="text"
      placeholder="Add your photos"
      className="py-3 px-3 rounded-full shadow-md w-2/3 sm:w-1/2"
      value={photoLink}
      onChange={(e) => setPhotoLink(e.target.value)}
    />
    <button
      className=" !bg-black text-white roun px-3 py-2 rounded-full shadow-lg font-bold xs:w-1/2"
      onClick={addPhotoByLink}
    >
      Add photo
    </button>
  </div>
  <div className=" grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
    {addedPhotos.length > 0 &&
      addedPhotos.map((link, i) => (
        <div className="relative h-60" key={link + i}>
          <button className="absolute w-7 h-7 rounded-lg bg-red-500 bottom-2 right-2 fill-white flex justify-center items-center cursor-pointer hover:opacity-50">
          <BsTrash className="fill-white w-4 h-4"/>
          </button>
          <Images src={link} alt=""/>
        </div>
      ))}

    <label className="cursor-pointer !bg-gray-300 hover:bg-black transition ease-in-out delay-150 text-white py-2  border bg-transparent items-center flex justify-center  shadow-lg   font-bold  gap-2 ">
      {" "}
      <input type="file" className="hidden " onChange={uploadPhoto} />
      <AiOutlineUpload className="text-2xl" />
      Upload
    </label>
  </div>
  </>
  );
};

export default PhotosUploader;
