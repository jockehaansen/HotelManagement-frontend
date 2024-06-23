import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Room = () => {
  const [data, setData] = useState({
    roomNumber: "",
    basePrice: "",
    beds: "",
  });
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/rooms/room/${id}/detailed`,
          {
            method: "GET",
          }
        );
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevdata) => ({
      ...prevdata,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault;
    console.log("Logic for out missing");
  };

  return (
    <>
      <h1 className="min-w-full bg-gray-500 text-white p-4">Room View</h1>{" "}
      <div>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col items-center"
        >
          <input
            type="text"
            name="roomNumber"
            placeholder="Room Number"
            value={data.roomNumber}
            onChange={handleInputChange}
            className="my-2 p-2 w-full rounded-lg"
          />
          <input
            type="text"
            name="basePrice"
            placeholder="Base Price"
            value={data.basePrice}
            onChange={handleInputChange}
            className="my-2 p-2 w-full rounded-lg"
          />
          <input
            type="text"
            name="beds"
            placeholder="Beds"
            value={data.beds}
            onChange={handleInputChange}
            className="my-2 p-2 w-full rounded-lg"
          />
          <button
            type="submit"
            className="my-2 w-56 bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded"
          >
            Update
          </button>
          <button className="my-2 w-56 bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded">
            Bookings for this room
          </button>
        </form>
      </div>
    </>
  );
};

export default Room;
