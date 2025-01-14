import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "../App";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("token");

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-lg transition-all duration-300 ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:underline hover:text-sky-500">
            Home
          </Link>
          <Link to="/blogs" className="hover:underline hover:text-sky-500">
            Blogs
          </Link>
          <Link to="/about" className="hover:underline hover:text-sky-500">
            About
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="hover:text-sky-500">
                Profile
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
                className="hover:text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:underline hover:text-sky-500">
                Login
              </Link>
              <Link to="/register" className="hover:underline hover:text-sky-500">
                Sign Up
              </Link>
            </>
          )}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full border-2 border-gray-500 hover:border-gray-700"
        >
          {theme === "light" ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-emerald-600 p-4 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-6 px-4">
          <Link to="/" className="block mb-4 hover:text-sky-500">
            Home
          </Link>
          <Link to="/blogs" className="block mb-4 hover:text-sky-500">
            Blogs
          </Link>
          <Link to="/about" className="block mb-4 hover:text-sky-500">
            About
          </Link>
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="block mb-4 hover:text-sky-500">
                Profile
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
                className="hover:text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="block mb-4 hover:text-sky-500">
                Login
              </Link>
              <Link to="/register" className="block hover:text-sky-500">
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
