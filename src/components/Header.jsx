import React from "react";
import { FiBatteryCharging, FiSend } from "react-icons/fi";



const Header = () => {
  return (
    <header className=" lg:px-4 h-screen w-screen flex flex-row justfy-center bg-white text-gray-800">
      {/* Left Section: Title, Search, and Icon */}
      <div className="w-1/2 flex flex-col py-16 bg-white ml">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          LIFE IS <span className="text-sky-500">YOU</span>
        </h1>

        {/* Search Bar */}
        <div className="relative w-full max-w-md  mb-8">
          <input
            type="text"
            placeholder="Looking for..."
            className="w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-sky-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            <FiSend />
          </button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-1/2 flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/ddhmjhtot/image/upload/w_1920,h_1080,c_fill,q_auto,f_auto/v1737231976/pexels-wildlittlethingsphoto-2055225_ybuqcz.jpg"
          alt="Header Visual"
          className="rounded-lg shadow-lg object-cover w-full h-full"
        />
      </div>
    </header>
  );
};

export default Header;

{/**
<div className="flex flex-col  items-center">
          <div className=" bg-white flex flex-row  shadow-lg">
            <BiDonateHeart size={200} className="text-black mr-8"/>  
            <FiBatteryCharging size={200} className="text-black" />
          </div>
          <p className="mt-4 text-lg font-medium text-gray-700">
            Empowering you with energy and innovation.
          </p>
  */}