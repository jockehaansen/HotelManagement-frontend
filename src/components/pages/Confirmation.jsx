import React from "react";
import { useLocation } from "react-router-dom";

const Confirmation = () => {
  const location = useLocation();
  const { booking } = location.state;
  return (
    <>
      <h1 className="min-w-full bg-gray-500 text-white p-4">
        Your Booking Confirmation
      </h1>
      <h1>{booking.customer.firstName}</h1>
      <h1>{booking.customer.lastName}</h1>
      <h1>{booking.customer.phonenNmber}</h1>
      <h1>{booking.customer.email}</h1>
      <h1>{booking.bookingNumber}</h1>
      <h1>{booking.totalPrice}</h1>
      <h1>{booking.startDate}</h1>
      <h1>{booking.endDate}</h1>
      <h1>{booking.guests}</h1>
      <h1>{booking.room.roomNumber}</h1>
    </>
  );
};

export default Confirmation;
