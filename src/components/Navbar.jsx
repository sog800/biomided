import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo"; // Assuming Logo is a simple component
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "../App"; // Import ThemeContext

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Use context to get the theme and toggle function
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Navigation Links and Theme Toggle */}
        <ul className="hidden md:flex items-center space-x-6">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border-2 border-gray-500 hover:border-gray-700 flex items-center mr-4"
          >
            {theme === "light" ? (
              <FiSun size={15} className="text-yellow-500" />
            ) : (
              <FiMoon size={15} className="text-blue-500" />
            )}
          </button>

          {/* Links */}
          <Link to="/" className="hover:underline hover:text-sky-500">
            Home
          </Link>
          <Link to="/blogs" className="hover:underline hover:text-sky-500">
            Blogs
          </Link>
          <Link to="/contact" className="hover:underline hover:text-sky-500">
            Contact
          </Link>
        </ul>

      {/* Hamburger Menu for Mobile */}
      <button
        className="md:hidden text-emerald-600 p-4 text-2xl text-right"  
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`md:hidden py-2 space-y-2 ${
            theme === "light"
              ? "bg-emerald-50 text-gray-900"
              : "bg-gray-800 text-white"
          }`}
        >
          <Link to="/" className="block hover:underline hover:text-sky-500">
            Home
          </Link>
          <Link
            to="/blogs"
            className="block hover:underline hover:text-sky-500"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="block hover:underline hover:text-sky-500"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
