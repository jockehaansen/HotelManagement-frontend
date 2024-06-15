import { useState, useEffect } from "react";

const Rooms = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/rooms", {
          method: "GET",
        });
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (id) => {
    console.log(`Button clicked for room with id: ${id}`);
  };

  return (
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
  );
};

export default Rooms;
