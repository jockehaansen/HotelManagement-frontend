import { useState } from "react";

import Menu from "./Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    //list items will link to endpoints or pages
    //login will be logout if logged in state = true
    <div className="relative">
      <div className="bg-white rounded-xl h-12 content-center">
        <ul className="flex justify-between items-center text-gray-700 font-bold text-m px-4">
          <li className="px-2 hover:text-gray-400">LOGO</li>
          <div className="flex">
            <li className="px-2 hover:text-gray-400 cursor-pointer">
              Book Now
            </li>
            <li
              className=" px-2 hover:text-gray-400 cursor-pointer"
              onClick={toggleMenu}
            >
              Menu
            </li>
          </div>
        </ul>
      </div>

      {isOpen && <Menu toggleMenu={toggleMenu} />}
    </div>
  );
};

export default Navbar;
