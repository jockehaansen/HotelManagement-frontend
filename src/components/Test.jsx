import React, { useState, useEffect } from 'react'

function Test() {
  // State to store fetched data
  const [data, setData] = useState([])

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/rooms', {
          method: 'GET',
        })
        console.log(response)
        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    // Call the fetchData function
    fetchData()
  }, []) // Empty dependency array to run only once when component mounts

  return (
    <div>
      <h1>List of Rooms</h1>
      <ul>
        {data.map((room) => (
          <li key={room.id}>
            <strong>Room Number:</strong> {room.roomNumber},
            <strong> Base Price:</strong> {room.basePrice},
            <strong> Beds:</strong> {room.beds}
            <strong> Created:</strong> {room.created}
            <strong> LastUpdated:</strong> {room.lastUpdated}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Test
