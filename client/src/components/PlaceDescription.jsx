import React from "react";

const PlaceDescription = ({ children , place}) => {
  return (
    <div className="flex justify-between gap-5 pt-5 xl:gap-2 sm:flex-col-reverse">
      <div className="flex flex-col  xl:w-3/4  sm:w-full">
        <h3 className="text-2xl font-bold pb-3 lg:text-xl">Description</h3>
        <p className="text-lg lg:text-[1rem] sm:text-sm">{place.description}</p>
        <div className="py-5">
          <p className="font-semibold"> Check in: {place.checkIn}:00</p>
          <p className="font-semibold"> Check out:{place.checkOut}:00</p>
          <p className="font-semibold">
            {" "}
            Max number of guests:{place.maxGuests}
          </p>
        </div>
        <div className="py-2">
          <h2 className="text-2xl font-bold lg:text-xl">Extra Info</h2>
          <p className="text-lg lg:text-[1rem] sm:text-sm">{place.extraInfo}</p>
        </div>
      </div>
      {children}
    </div>
  );
};

export default PlaceDescription;
