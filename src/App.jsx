import "./App.css";
import Login from "./components/pages/Login";
import Room from "./components/pages/Room";
import Rooms from "./components/pages/Rooms";
import Customers from "./components/pages/Customers";
import Customer from "./components/pages/Customer";
import Home from "./components/pages/Home";
import Bookings from "./components/pages/Bookings";
import Address from "./components/pages/Address";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/room/:id/detailed" element={<Room />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/:email" element={<Customer />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/address/detailed/:id" element={<Address />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
