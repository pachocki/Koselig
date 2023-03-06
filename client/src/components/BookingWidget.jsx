import React, { useContext, useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const BookingWidget = ({ place }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [redirect, setRedirect] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }
  const today = new Date().toISOString().substring(0, 10);
  const handleBooking = async () => {
    const response = await axios.post("/bookings", {
      checkIn,
      checkOut,
      numberOfGuests,
      name,
      phone,
      place: place._id,
      price: numberOfNights * place.price,
    });

    setRedirect(`/account/bookings/${response.data._id}`);
  };

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div className="flex w-2/5  bg-stone-200 rounded-xl xl:w-1/3 sm:w-full xs:bg-gray-50 lg:w-2/5 pb-5">
      <div className=" mx-auto  px-3   xl:w-full xl:px-2 sm:h-full xs:px-0">
        <div className="sticky top-20 inline-block pt-5 sm:w-full sm:py-5 w-full">
          <div className="flex flex-col  justify-center items-center  ">
            <div className=" bg-white w-full rounded-xl py-5 px-5 shadow-xl  inline-block xl:px-2  xs:w-full  ">
              <h3 className="text-center font-bold">{place.title}</h3>
              <h3 className="text-xl py-2 text-center pb-5 xl:text-lg">
                <b>{place.price} Nok</b> / per night
              </h3>
              <div className="flex shadow-md xl:flex-col sm:flex-row xs:max-w-full xs:flex-col">
                <div className="flex-col flex w-full border px-4 py-2  rounded-l-xl rounded-b-none font-bold xl:rounded-t-lg  ">
                  <label className="sm:text-sm">Check in :</label>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="font-normal text-sm"
                    min={today}
                  />
                </div>
                <div className="flex-col flex w-full border px-4 py-2  rounded-r-xl !rounded-b-none font-bold shadow-md xl:rounded-t-none  ">
                  <label className="sm:text-sm">Check out :</label>
                  <input
                    type="date"
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="font-normal text-sm"
                    min={checkIn}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center  border  rounded-b-xl border-t-none mb-5 overflow-hidden shadow-md">
                <input
                  type="number"
                  placeholder="Number of Guest"
                  className="w-full text-center h-full py-3"
                  value={numberOfGuests}
                  onChange={(e) => setNumberOfGuests(e.target.value)}
                />
              </div>
              {numberOfNights > 0 && (
                <div className="border my-3 px-2 py-2 rounded-xl overflow-hidden shadow-md">
                  <label className="px-3 font-bold   ">Your full name :</label>
                  <input
                    type="text"
                    placeholder="Please write your name"
                    className="w-full text-center h-full py-3 mb-3 border overflow-hidden rounded-xl shadow-md font-semibold"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label className="px-3 font-bold  ">Phone number :</label>
                  <input
                    type="tel"
                    placeholder="Write your telephone number"
                    className="w-full text-center h-full py-3 border rounded-xl overflow-hidden shadow-md font-semibold"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              )}
              <button
                className="bg-black py-2 px-3 text-white w-full  font-bold hover:bg-teal- transition-all"
                onClick={handleBooking}
              >
                Book Now
              </button>
              <div className="flex justify-center items-center pt-3">
                {numberOfNights > 0 && (
                  <span className="text-center font-semibold">
                    {" "}
                    Price for {numberOfNights} nights is
                    <br />
                    {numberOfNights * place.price} Nok
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingWidget;
