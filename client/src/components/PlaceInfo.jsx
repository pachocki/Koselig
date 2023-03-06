import React from "react";

function PlaceInfo({place}) {
  return (
    <div className="max-w-[1400px]">
      <h1 className="text-2xl font-bold">{place.title}</h1>
      <a
        className="underline hover:opacity-50"
        href={`https://maps.google.com/?q=${place.address}`}
        target="_blank"
      >
        <p>{place.address}</p>
      </a>
    </div>
  );
}

export default PlaceInfo;
