import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookingWidget from "../components/BookingWidget";
import Gallery from "../components/Gallery";
import PlaceInfo from "../components/PlaceInfo";
import PlaceDescription from "../components/PlaceDescription";

const SinglePage = () => {
  const { id } = useParams();
  const [place, setPlaces] = useState(null);


  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("places/" + id).then((response) => {
      setPlaces(response.data);
    });
  }, [id]);
  if (!place) return "";

  
  return (
    <div className="mt-8  py-20 px-5 lg:px-2 max-w-[1400px] mx-auto">
      <PlaceInfo place={place} />
      <Gallery place={place} />
      <PlaceDescription place={place}>
        <BookingWidget place={place} />
      </PlaceDescription>
    </div>
  );
};

export default SinglePage;
