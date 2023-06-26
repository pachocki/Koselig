import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PlaceInfo from "../components/PlaceInfo";
import Gallery from "../components/Gallery";
import BookingsDate from "../components/BookingsDate";
import Loading from "../components/Loading";

const SingleBooking = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState([]);
  const [loading,setLoading] = useState(true);
 
  useEffect(() => {
    if (id) {
      axios.get("bookings").then(({ data }) => {
        const foundBooking = data.bookings.find(({ _id }) => _id === id);
        if (foundBooking) {
          setBooking(foundBooking);
          setLoading(false);
        }
      });
    }
  }, [id]);
 

  if (!booking) {
    return "";
  }
  if (loading) {
    return <div><Loading/></div>;
  }

  return (
    <div className="pt-24 pb-20 px-5 max-w-[1400px] mx-auto sm:pt-24">
      <PlaceInfo place={booking.place} />
      <Gallery place={booking.place} />
      <div className="bg-gray-200 px-2 py-5 mt-2 rounded-xl">
        <h2 className="text-xl font-bold ">Ditt neste opphold er planlagt til:</h2>
        <div>
          <BookingsDate booking={booking} />
          <h2 className="text-xl font-bold ">Vi ønsker deg et hyggelig opphold!</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleBooking;
