import { useNavigate } from "react-router-dom";

const Menu = ({ toggleMenu }) => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
    toggleMenu();
  };

  const handleHomeClick = () => {
    navigate("/");
    toggleMenu();
  };
  const handleRoomsClick = () => {
    navigate("/rooms");
    toggleMenu();
  };
  const handleCustomersClick = () => {
    navigate("/customers");
    toggleMenu();
  };
  const handleBookingsClick = () => {
    navigate("/bookings");
    toggleMenu();
  };
  const handleBookReservationClick = () => {
    navigate("/bookings/create");
    toggleMenu();
  };

  return (
    <ul className="min-w-screen mt-12 text-gray-700 font-bold text-m bg-white p-2 rounded-md shadow-lg">
      <li className="p-2 hover:text-gray-400" onClick={handleHomeClick}>
        Home
      </li>
      <li className="p-2 hover:text-gray-400" onClick={handleBookReservationClick}>Book Reservation</li>
      <li className="p-2 hover:text-gray-400">Contact Us</li>
      <li className="p-2 hover:text-gray-400" onClick={handleLoginClick}>
        Login
      </li>
      <li className="p-2 hover:text-gray-400" onClick={handleRoomsClick}>
        Rooms
      </li>
      <li className="p-2 hover:text-gray-400" onClick={handleCustomersClick}>
        Customers
      </li>
      <li className="p-2 hover:text-gray-400" onClick={handleBookingsClick}>
        Bookings
      </li>
    </ul>
  );
};

export default Menu;
