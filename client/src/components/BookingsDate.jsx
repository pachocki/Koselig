import React, { useState, useEffect } from "react";
import { differenceInCalendarDays, format } from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";

const BookingsDate = ({ booking }) => {
  const [showBooking, setShowBooking] = useState(true);

  useEffect(() => {
    const currentDate = new Date();
    const checkOutDate = new Date(booking.checkOut);

    // Check if current date is after the check-out date
    if (currentDate > checkOutDate) {
      setShowBooking(false);
    }
  }, [booking]);

  if (!showBooking) {
    return null;
  }

  return (
    <div className="font-semibold">
      <h2 className="text-lg font-bold">{booking.place.title}</h2>
      <div className="flex items-center gap-1">
        <FaCalendarAlt />
        <span className="font-semibold">
          {format(new Date(booking.checkIn), "yyy-MM-dd")}
        </span>
        <span className="font-semibold">&rarr;</span>

        <span>
          <FaCalendarAlt />
        </span>
        <span className="font-semibold">
          {format(new Date(booking.checkOut), "yyy-MM-dd")}
        </span>
      </div>

      <div>
        <p>
          Antall netter:{" "}
          {differenceInCalendarDays(
            new Date(booking.checkOut),
            new Date(booking.checkIn)
          )}
        </p>
        <p>Total pris: {booking.place.price}Nok</p>
      </div>
    </div>
  );
};

export default BookingsDate;
