import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Header = ({ theme }) => {
  return (
    <header
      className={`relative py-24 ${
        theme === "dark" ? "bg-gray-800" : "bg-emerald-50"
      } transition-all duration-500 ease-in-out [clip-path:polygon(0_0,100%_0,100%_90%,50%_100%,0_90%)] h-screen`}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Navbar */}
        <Navbar theme={theme} />

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-600 mb-4 animate-fade-in mt-12">
          Welcome to <span className="text-sky-500">Biomided Blog</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-emerald-500 mb-6 animate-slide-in ">
          Discover the secrets of body health, natural beauty,<br/> and biomeds with
          expert insights and tips.
        </p>
        <div>
          {/* Call-to-Action */}
          <Link
            to="/blogs"
            className="inline-block px-6 py-3 bg-sky-500 text-white text-lg font-bold rounded-lg hover:bg-sky-600 transition transform hover:scale-105 animate-bounce"
          >
            Explore Now
          </Link>
          <div className="mt-6 text-center text-sm text-gray-500 animate-pulse rounded-lg p-4 border inline-block  ">
            <h3>The purpose of the earth, is to give and receive love.</h3>
            <p>
              Life isn’t about stress, loneliness, or constant trouble. Sure,
              people say, “That’s just life,” but they’re wrong. Life is about
              love, joy, and peace. The bad stuff? That’s just what happens when
              we forget the truth. Together, we can make the world better by
              sharing truth, love, and happiness. Let’s explore health, beauty,
              and wisdom—and spread the good vibes everywhere.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Heart */}
      <div
        className="absolute top-12 right-6 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12 animate-pulse"
        style={{
          clipPath:
            "polygon(50% 0%, 61% 20%, 80% 20%, 100% 40%, 80% 100%, 50% 80%, 20% 100%, 0% 40%, 20% 20%, 39% 20%)",
        }}
      >
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
