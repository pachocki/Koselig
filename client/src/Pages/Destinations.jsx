import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Images from "../components/Images";
import Loading from "../components/Loading";

const Destinations = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
 
  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces([
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
      ]);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div><Loading/></div>
      ) : (
        <div
          className="grid grid-cols-3 gap-x-10 gap-y-8 py-28 px-5 min-h-screen lg:grid-cols-2 sm:grid-cols-1 sm:gap-x-2 sm:px-2 sm:pb-10"
        
        >
          {places.length > 0 &&
            places?.map((place, i) => (
              <Link to={"/place/" + place._id} key={i}>
                <div className="flex flex-col overflow-hidden border border-black">
                  {place.photos?.[0] && (
                    <Images
                      src={place.photos?.[0]}
                      className="w-full h-[40vh] object-cover"
                    />
                  )}
                  <div className="flex flex-col pb-5 px-2 gap-2 ">
                    <div className="flex items-center justify-between pt-2 lg:text-sm ">
                      <h2>{place.address}</h2>
                      <h2>From {place.price}Nok night</h2>
                    </div>
                    <span className="mt-1 text-lg font-bold flex items-center gap-1 lg:text-[1rem] ">
                      {place.title}
                      <FiArrowUpRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default Destinations;
