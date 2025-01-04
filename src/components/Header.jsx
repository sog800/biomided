import React from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = ({theme}) => {
  return (
    <header className={`py-16 mt-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-emerald-50'}`}>
      <div className="container mx-auto px-4 text-center">
        {/* Navbar */}
        <Navbar theme={theme}/>
        {/* Main Heading */}
        <h1 className="text-5xl font-extrabold text-emerald-600 mb-4">
          Welcome to <span className="text-sky-500">Biomided Blog</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-emerald-500 mb-6">
          Discover the secrets of body health, natural beauty, and biomeds with
          expert insights and tips.
        </p>

        {/* Call-to-Action */}
        <a
          href="/blogs"
          className="inline-block px-6 py-3 bg-sky-500 text-white text-lg font-bold rounded-lg hover:bg-sky-600 transition"
        >
          Explore Now
        </a>
      </div>
    </header>
  );
};

export default Header;
