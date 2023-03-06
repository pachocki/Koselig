import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/Ai";
import AccountNavigation from "../components/AccountNavigation";
import Images from "../components/Images";

const Places = () => {
  const [places, setPlaces] = useState();
  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);
  const max_length = 600;
  return (
    <div className="pt-28 min-h-screen pb-10">
      <div className="flex  justify-center">
        <AccountNavigation />
      </div>

      <div className=" pt-10 flex justify-center">
        <div className="flex flex-col items-center gap-3">
          <span>List of all places</span>
          <Link
            to="/account/places/new"
            className="bg-black py-2 px-4  text-white inline-flex items-center gap-2"
          >
            <AiOutlinePlus />
            Add new place
          </Link>
        </div>
      </div>
      <div className="mt-10  w-full mx-auto text-gray-600 px-2 flex flex-col gap-2">
        {places?.length > 0 &&
          places.map((place) => (
            <div key={place.title}>
              <Link to={"/account/places/" + place._id}>
                <div
                  className="flex items-center mx-auto py-2 px-2 gap-5 bg-gray-200 rounded-lg w-2/3 cursor-pointer lg:w-full  sm:flex-col sm:w-full"
                  key={place.title}
                >
                  <div className="w-44 h-44 bg-gray-400 rounded-lg shrink-0 sm:w-full">
                    {place?.photos.length > 0 && (
                      <Images
                        src={place.photos[0]}
                        alt={place.title}
                        className="object-cover w-full h-full rounded-lg "
                      />
                    )}
                  </div>
                  <div className="text-2xl flex flex-col ">
                    <h2 className="font-bold">{place.title}</h2>
                    <p className=" text-lg underline font-semibold">
                      {place.address}
                    </p>
                    <p className=" text-sm">{`${
                      place.description.substring(0, max_length) + "..."
                    }`}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Places;
