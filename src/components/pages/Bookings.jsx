import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/bookings", {
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

  const handleUpdateClick = (id) => {
    navigate(`/customers/${email}`);
  };
  const handleCustomerClick = (email) => {
    navigate(`/customers/${email}`);
  };
  const handleRoomsClick = (id) => {
    console.log(`Rooms clicked for booking with id: ${id}`);
  };

  return (
    <>
      <h1 className="min-w-full bg-gray-500 text-white p-4">Bookings</h1>
      <div className="md:overflow-scroll">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-200 text-left ">
            <tr>
              <th className="px-2 md:px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
                Booking Number
              </th>
              <th className="px-2 md:px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
                StartDate
              </th>
              <th className="px-2 md:px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
                EndDate
              </th>
              <th className="hidden md:table-cell px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="hidden md:table-cell px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th className="hidden md:table-cell px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="hidden md:table-cell px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider">
                Rooms
              </th>
              <th className="hidden md:table-cell px-6 py-3 text-xs font-medium - text-gray-500 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((booking, index) => (
              <tr
                key={booking.id}
                className={index % 2 == 0 ? "bg-white" : "bg-gray-200"}
              >
                <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                  {booking.bookingNumber}
                </td>
                <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                  {booking.startDate}
                </td>
                <td className="px-2 md:px-6 py-4 whitespace-nowrap">
                  {booking.endDate}
                </td>
                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
                  {booking.totalPrice}
                </td>
                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
                  {booking.created}
                </td>
                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded"
                    onClick={() => handleCustomerClick(booking.customer.email)}
                  >
                    Customer
                  </button>
                </td>
                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded"
                    onClick={() => handleRoomsClick(booking.id)}
                  >
                    Rooms
                  </button>
                </td>
                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
                  <button
                    className="bg-slate-500 hover:bg-slate-700 text-white text-xs font-bold py-2 px-4 rounded"
                    onClick={() => handleUpdateClick(booking.id)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Bookings;
