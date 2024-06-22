import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Customer = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const { email } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/customers/${email}`,
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
  }, [email]);

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
      const response = await fetch(`http://localhost:8080/customers/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsEditing(false);
      } else {
        console.error("Error updating customer data");
      }
    } catch (error) {
      console.error("Error updating customer data", error);
    }
  };

  return (
    <>
      <h1 className="min-w-full bg-gray-500 text-white p-4">Customer View</h1>{" "}
      <div>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col items-center"
        >
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={data.firstName}
            onChange={handleInputChange}
            className="my-2 p-2 w-full rounded-lg"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={data.lastName}
            onChange={handleInputChange}
            className="my-2 p-2 w-full rounded-lg"
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            value={data.phoneNumber}
            onChange={handleInputChange}
            className="my-2 p-2 w-full rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleInputChange}
            className="my-2 p-2 w-full rounded-lg"
          />
          <button
            type="submit"
            className="my-2 max-w-36 bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded"
          >
            Update
          </button>
          <button className="my-2 max-w-36 bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded">
            Address
          </button>
          <button className="my-2 max-w-36 bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded">
            Bookings
          </button>
        </form>
      </div>
    </>
  );
};

export default Customer;
