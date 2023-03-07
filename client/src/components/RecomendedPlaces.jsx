import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import axios from "axios";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import Images from "./Images";
const RecomendedPlaces = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces([
        ...response.data,
        ...response.data,
        ...response.data,
        ...response.data,
      ]);
    });
  }, []);
  return (
    <div className="m-w-0 overflow-hidden flex bg-gray-50 py-10 items-center sm:flex-col">
      <div className="w-5/6 flex justify-center items-center flex-col gap-2 xl:w-full xl:items-start xl:px-5 ">
        <div className="w-3/4  px-2 pb-4 xl:w-full xl:px-0">
        <h2 className="text-4xl font-serif pb-5 lg:text-3xl md:text-2xl sm:font-semibold sm:text-xl font-bold">Anbefalte steder av våre brukere</h2>
        <p className="text-2xl lg:text-xl md:text-lg sm:text-base">
          Våre brukere har valgt ut disse stedene fordi de tilbyr en rekke
          spennende aktiviteter og lokale delikatesser som garantert vil
          tilfredsstille deg. Uansett om du er på utkikk etter eventyr,
          avslapning eller noe midt imellom, vil du finne noe som passer dine
          preferanser. Fra vakre naturlandskap til livlige bygater, vil du finne
          noe som passer for deg. Kom og opplev magien av disse fantastiske
          stedene, og skap minner som vil vare livet ut.
        </p>
        </div>
      </div>
      <Swiper
        spaceBetween={0}
        grabCursor={true}
        loop={true}
       
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper "
      >
        {places.length > 0 &&
          places?.slice(0,5).map((place, i) => (
            <SwiperSlide key={place._id} className="">
              <Link to={"/place/" + place._id}>
                <div
                  className="flex flex-col  overflow-hidden border border-black"
                  key={i}
                >
                  {place.photos?.[0] && (
                    <Images
                      src={place.photos?.[0]}
                      className="!h-[70vh] object-cover"
                    />
                  )}
                  <div className="  flex flex-col  pb-5 px-2 gap-2 ">
                    <div className="flex items-center justify-between pt-2  lg:text-sm ">
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
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default RecomendedPlaces;
