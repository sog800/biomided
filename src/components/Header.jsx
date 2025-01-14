import React from "react";
import { Link } from "react-router-dom";

const Header = ({ theme }) => {
  return (
    <header
      className={`relative py-24 mb-16 ${theme === "dark" ? "bg-gray-800" : "bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500"} transition-all duration-500 ease-in-out h-screen`}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Main Heading with Poppins Font */}
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 animate-fade-in mt-12 tracking-wide font-poppins">
          Unlock the Power of <span className="text-yellow-300">Wellness</span> and <span className="text-cyan-400">Beauty</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white mb-6 animate-slide-in font-medium tracking-wide opacity-90">
          Dive into a journey of health, happiness, and vitality. Your ultimate wellness hub.
        </p>

        {/* Call-to-Action */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Link
            to="/blogs"
            className="inline-block px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-xl font-bold rounded-lg hover:bg-gradient-to-l from-teal-600 to-cyan-600 transition transform hover:scale-105 animate-bounce shadow-lg"
          >
            Explore Our Blog
          </Link>
        </div>

        {/* Inspirational Message */}
        <div className="mt-6 text-center text-sm text-white opacity-80 animate-pulse rounded-lg p-6 border-2 border-white inline-block max-w-lg mx-auto">
          <h3 className="text-xl font-semibold mb-3">
            "The purpose of life is to give and receive love."
          </h3>
          <p>
            Embrace a life of wellness—free from stress, filled with joy and health. Join our journey to explore body and mind care.
          </p>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full opacity-50 animate-pulse"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 20%, 80% 20%, 100% 40%, 80% 100%, 50% 80%, 20% 100%, 0% 40%, 20% 20%, 39% 20%)",
        }}
      ></div>

      <div
        className="absolute bottom-0 right-1/2 transform translate-x-1/2 w-48 h-48 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-30 animate-pulse"
      ></div>
    </header>
  );
};

export default Header;
