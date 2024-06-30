import { useState } from 'react'

const Book = () => {

    const [ formValues, setFormValues ] = useState({
        startDate:'',
        endDate:'',
        guests: 1
    })

    const [ data, setData ] = useState([])

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
             [name]: value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchRooms()
    }

    const fetchRooms = async () => {
        try {
            const response = await fetch("http://localhost:8080/bookings/find", {
                method:'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formValues)

            }
        )
        if(!response.ok){
            throw new Error("Network response was not ok")
        }
        const responseData = await response.json()
        setData(responseData)
    }
        catch (error) {
            console.error("Error fetching available rooms", error)
        }
    }

  return (
    <>
        <h1 className="min-w-full bg-gray-500 text-white p-4">Book Reservation</h1>
        <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <label htmlFor="startDate">From</label>
                <input type="date" name="startDate" id="startDate" value={formValues.from} onChange={handleFormChange}/>
                <label htmlFor="endDate">Until</label>
                <input type="date" name="endDate" id="endDate" value={formValues.until} onChange={handleFormChange}/>
                <label htmlFor="guests">Guests</label>
                <input type="number" name="guests" id="guests" value={formValues.guests} min={1} max={4} onChange={handleFormChange}/>
                <button type="submit" className="bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded">Find rooms</button>
            </form>
        </div>
        
        {data.length > 0 && (
            <div>
            <h1 className="bg-gray-500 text-white p-4">Rooms</h1>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-200 text-left">
                <tr>
                  <th className="px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
                    Room Number
                  </th>
                  <th className="px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
                    Base Price
                  </th>
                  <th className="px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
                    Beds
                  </th>
                  <th className="px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
                    Last Updated
                  </th>
                  <th className="px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider"></th>
                </tr>
              </thead>
              <tbody>
                {data.map((room, index) => (
                  <tr
                    key={room.id}
                    className={index % 2 == 0 ? "bg-white" : "bg-gray-200"}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{room.roomNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{room.basePrice}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{room.beds}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{room.created}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {room.lastUpdated}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className="bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded"
                        onClick={() => handleClick(room.id)}
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
    </>
  )
}

export default Book