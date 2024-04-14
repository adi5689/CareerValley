import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
 };

 return (
    <header className="bg-[white]/40 text-white p-4 absolute top-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Navigation */}
        <div className={`flex flex-col w-3/5 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform -translate-x-full' : ''}`}>
          {/* Logo */}
          <div>
            <img
              src="https://thecareervalley.com/wp-content/uploads/2023/07/Career-Vallet-Logo.png"
              alt="Company Logo"
              className="h-10 w-auto"
            />
          </div>
          {/* Navigation */}
          <div className="mt-5">
            <nav className="flex space-x-4">
              {/* Navigation Links */}
              <a href="#" className="hover:text-[#235950] hover:border-b-2 hover:border-[#8aaca4]">All Courses</a>
              <a href="#" className="hover:text-[#235950] hover:border-b-2 hover:border-[#8aaca4]">B.Tech</a>
              <a href="#" className="hover:text-[#235950] hover:border-b-2 hover:border-[#8aaca4]">B.Sc</a>
              <a href="#" className="hover:text-[#235950] hover:border-b-2 hover:border-[#8aaca4]">B.Com</a>
              <a href="#" className="hover:text-[#235950] hover:border-b-2 hover:border-[#8aaca4]">BBA</a>
              <a href="#" className="hover:text-[#235950] hover:border-b-2 hover:border-[#8aaca4]">BCA</a>
              <a href="#" className="hover:text-[#235950] hover:border-b-2 hover:border-[#8aaca4]">BA</a>
              <a href="#" className="hover:text-[#235950] hover:border-b-2 hover:border-[#8aaca4]">MBA</a>
              <a href="#" className="hover:text-[#235950] hover:border-b-2 hover:border-[#8aaca4]">M.Tech</a>
            </nav>
          </div>
        </div>
        {/* Search Input */}
        <div className="w-2/3 flex justify-center items-center">
          <input
            type="text"
            placeholder="Enter Your Course name..."
            className="rounded-l-lg p-4 w-[80%]"
          />
          <button className="bg-[#235950] rounded-r-lg p-5">
            <FiSearch className="text-white" />
          </button>
        </div>
        {/* Menu Toggle Button */}
        <div className="flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? "" : <FiMenu className="h-10" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed top-[-75px] right-0 w-[30vw] h-full bg-transparent bg-opacity-90 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out">
          <div className="bg-[#8caeac]/75 p-6 rounded shadow-lg w-full max-w-md mx-auto">
            
            <nav className="flex flex-col space-y-4">
              {/* Menu Items */}
              <button
              onClick={toggleMenu}
              className="text-white text-right absolute right-10 text-[20px]"
            >
              <FiX />
            </button>
              <a href="#" className="hover:text-black">Home</a>
              <a href="#" className="hover:text-black">About</a>
              <a href="#" className="hover:text-black">Services</a>
              <a href="#" className="hover:text-black">Our Experts</a>
              <a href="#" className="hover:text-black">Overseas Experts</a>
              <a href="#" className="hover:text-black">Events</a>
              <a href="#" className="hover:text-black">Gallery</a>
              <a href="#" className="hover:text-black">Contact Us</a>
              <a href="#" className="hover:text-black">Login</a>
            </nav>
          </div>
        </div>
      )}
    </header>
 );
};

export default Header;
