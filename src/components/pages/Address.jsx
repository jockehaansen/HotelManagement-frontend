import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Address = () => {
  const [data, setData] = useState({
    street: "",
    number: "",
    zipCode: "",
    city: "",
    country: "",
  });
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/address/detailed/${id}`,
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
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/address/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsEditing(false);
      } else {
        console.error("Error updating address data");
      }
    } catch (error) {
      console.error("Error updating address data", error);
    }
  };

  return (
    <>
      <h1 className="min-w-full bg-gray-500 text-white p-4">Address View</h1>{" "}
      <div>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col items-center"
        >
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={data.street}
            onChange={handleInputChange}
            className="my-2 p-2 w-full rounded-lg"
          />
          <input
            type="text"
            name="number"
            placeholder="Number"
            value={data.number}
            onChange={handleInputChange}
            className="my-2 p-2 w-full rounded-lg"
          />
          <input
            type="text"
            name="zipCode"
            placeholder="ZipCode"
            value={data.zipCode}
            onChange={handleInputChange}
            className="my-2 p-2 w-full rounded-lg"
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={data.city}
            onChange={handleInputChange}
            className="my-2 p-2 w-full rounded-lg"
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={data.country}
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
            Customers listed on this address
          </button>
        </form>
      </div>
    </>
  );
};

export default Address;
