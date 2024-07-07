import React from 'react'
import { useLocation } from 'react-router-dom'

const Confirmation = () => {
    const location = useLocation()
    const { booking } = location.state
  return (
    <>
      <h1 className="min-w-full bg-gray-500 text-white p-4">Your Booking Confirmation</h1>
      <h1>{booking.customerEmail}</h1>
      <h1>{booking.startDate}</h1>
      <h1>{booking.endDate}</h1>
      <h1>{booking.roomID}</h1>
      <h1>{booking.bookingNumber}</h1>
      </>
  )
}

export default Confirmation