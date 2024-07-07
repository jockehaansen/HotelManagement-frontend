import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Book = () => {
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    startDate: '',
    endDate: '',
    email: '',
    guests: 1,
    customerEmail: '',
    roomID: null,
  });

  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRoom();
  };

  const handleRoomClick = (roomId) => {
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        roomID: roomId,
      }))
      bookRoom(formValues)
      
    };

  const fetchRoom = async () => {
    try {
      const response = await fetch("http://localhost:8080/bookings/find", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formValues)
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error("Error fetching available rooms", error);
    }
  };

  const bookRoom = async (formValues) => {
    console.log('Formvalues before booking is sent', formValues)
    try {
      const response = await fetch("http://localhost:8080/bookings/create", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formValues)
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const responseData = await response.json();
      navigate('/bookings/confirmation', { state: {booking : responseData}})
    } catch (error) {
      console.error("Error fetching booking confirmation", error);
    }
  };

  return (
    <>      
      <div>
      <h1 className="min-w-full bg-gray-500 text-white p-4">Book Reservation</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="startDate">From</label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={formValues.startDate}
            onChange={(e) => setFormValues({ ...formValues, startDate: e.target.value })}
          />
          <label htmlFor="endDate">Until</label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={formValues.endDate}
            onChange={(e) => setFormValues({ ...formValues, endDate: e.target.value })}
          />
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            name="guests"
            id="guests"
            value={formValues.guests}
            min={1}
            max={4}
            onChange={(e) => setFormValues({ ...formValues, guests: e.target.value })}
          />
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={formValues.customerEmail}
            onChange={(e) => setFormValues({ ...formValues, customerEmail: e.target.value })}
          />
          <button type="submit" className="bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded">Find rooms</button>
        </form>
      </div>

      {data.length > 0 && (
        <div>
          <h1 className="bg-gray-500 text-white p-4">Rooms</h1>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-200 text-left">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Room Number</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Base Price</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Beds</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((room, index) => (
                <tr key={room.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
                  <td className="px-6 py-4 whitespace-nowrap">{room.roomNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{room.basePrice}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{room.beds}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded"
                      onClick={() => handleRoomClick(room.id)}
                    >
                      Book
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Book;
