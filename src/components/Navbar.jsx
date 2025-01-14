import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "../App";
import { FiUserCheck } from "react-icons/fi";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("token");

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 shadow-md transition-all duration-300 ease-in-out mb-16 ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-800 text-white"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
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

          {/* Conditional Links for Logged-In Users */}
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="text-lg hover:text-sky-500">
                <FiUserCheck className="inline-block text-2xl" />
              </Link>
              <LogoutButton />
            </div>
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

        {/* Theme Toggle Button */}
        <div className="flex items-center ml-6">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border-2 border-gray-500 hover:border-gray-700 flex items-center"
          >
            {theme === "light" ? (
              <FiSun size={24} className="text-yellow-500" />
            ) : (
              <FiMoon size={24} className="text-blue-500" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-emerald-600 p-4 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`bg-emerald-50 text-gray-900 w-3/4 sm:w-1/2 md:w-1/3 h-full p-6 transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out`}
        >
          <div className="flex justify-between items-center mb-6">
            <Logo />
            <button className="text-2xl" onClick={() => setIsMenuOpen(false)}>
              &times;
            </button>
          </div>
          <ul className="space-y-6">
            <Link
              to="/"
              className="block text-lg hover:underline hover:text-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/blogs"
              className="block text-lg hover:underline hover:text-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              to="/about"
              className="block text-lg hover:underline hover:text-sky-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>

            {/* Conditional Links for Logged-In Users */}
            {isLoggedIn ? (
              <div>
                <Link
                  to="/profile"
                  className="block text-lg hover:text-sky-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FiUserCheck className="inline-block text-4xl my-3" />
                </Link>
                <LogoutButton />
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block text-lg hover:underline hover:text-sky-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block text-lg hover:underline hover:text-sky-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
