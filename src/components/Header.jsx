import React from "react";
import { Link } from "react-router-dom";

const Header = ({ theme }) => {
  return (
    <header
      className={`relative h-screen flex items-center justify-center ${
        theme === "dark"
          ? "bg-gray-800"
          : "bg-gradient-to-r from-teal-400 to-pink-500"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="z-10 text-center text-white px-6">
        {/* Main Heading */}
        <h1 className="text-6xl font-bold mb-16 tracking-wide">
          Unlock the Power of <span className="text-yellow-300">Wellness</span>{" "}
          and <span className="text-cyan-400">Beauty</span>
        </h1>

        {/* Larger Circular Button */}
        <div className=" flex items-center justify-center ">
        <Link
          to="/blogs"
          className="w-40 h-40 text-2xl font-bold flex items-center justify-center  bg-teal-500 text-white rounded-full hover:bg-teal-600 shadow-2xl transition-transform transform hover:scale-110"
        >
          Explore
        </Link>
      </div>
      </div>
    </header>
  );
};

export default Header;
