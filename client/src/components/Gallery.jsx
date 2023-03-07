import React, { useState } from 'react'
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import Images from './Images';

const Gallery = ({place}) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const close = ()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowAllPhotos(false)
  }
  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black/60 text-white min-h-screen min-w-screen m-auto transition-all z-50 h-full sm:fixed sm:overflow-scroll">
        <div className="bg-black p-8 grid gap-4 sm:overflow-y-hidden">
          <div>
            <h2 className="text-3xl mr-48 lg:text-2xl sm:text-sm sm:w-1/2">Photos of {place.title}</h2>
            <button
              onClick={() => close()}
              className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl items-center shadow shadow-black bg-white text-black sm:right-2 sm:px-2 sm:py-1 sm:text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 sm:w-4 sm:h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
              Close photos
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div
                className="flex justify-center flex-col items-center w-2/3 m-auto pt-5"
                key={photo}
              >
                <div className="rounded-xl overflow-hidden">
                  <Images
                    src={photo}
                    alt={photo.title}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap grid-cols-[2fr_1fr] gap-2 mt-4 rounded-2xl overflow-hidden h-full sm:grid-cols-1 max-h-screen">
    <div>
      <Images
        src={place?.photos?.[0]}
        alt={place.title}
        className="w-full h-full lg:h-[70vh] object-cover cursor-pointer sm:h-[50vh]" onClick={()=>setShowAllPhotos(true)}
      />
    </div>
    <div className="flex flex-col gap-2 relative sm:hidden ">
      <Images
        src={place?.photos?.[1]}
        alt={place.title}
        className="w-full h-[50vh] object-cover cursor-pointer" onClick={()=>setShowAllPhotos(true)}
      />
      <Images
        src={place?.photos?.[2]}
        alt={place.title}
        className="w-full h-1/2 object-cover cursor-pointer" onClick={()=>setShowAllPhotos(true)}
      />
      <button
        className="bg-gray-200 absolute bottom-3 right-5 px-3 py-1 rounded-xl  font-medium shadow-xl flex gap-2 items-center"
        onClick={() => setShowAllPhotos(true)}>
        <BsFillGrid3X3GapFill />
        Vis alle bildene
      </button>
    </div>
  </div>
  )
}

export default Gallery