import axios from "axios";
import React, { useEffect, useState } from "react";
import AccountNavigation from "../components/AccountNavigation";
import { Link } from "react-router-dom";
import BookingsDate from "../components/BookingsDate";
import Images from "../components/Images";
import Loading from "../components/Loading";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div className="min-h-screen  pt-28 px-2 ">
      <div className="flex justify-center w-full">
        <AccountNavigation />
      </div>

      <div className="flex flex-col gap-2 pt-10 w-2/3 lg:w-full mx-auto sm:w-full sm:px-2 sm:pb-8">
        <h2 className="font-bold text-xl py-2 px-1">Dine bestillinger :</h2>
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <Link to={`/account/bookings/${booking._id}`} key={booking._id}>
              <div className="flex bg-gray-200 rounded-xl gap-4 items-center cursor-pointer sm:flex-col sm:gap-0 sm:pb-3">
                {booking.place?.photos?.length > 0 && (
                  <div className="w-1/4 h-1/2 py-2 px-2 sm:w-full">
                    <Images
                      src={booking?.place?.photos[0]}
                      alt={booking?.place?.title}
                      className="object-cover w-full  rounded-lg"
                    />
                  </div>
                )}
                <BookingsDate booking={booking} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Bookings;
