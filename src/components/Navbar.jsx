import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "../App";
import { motion } from "framer-motion";  // Import motion from framer-motion

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

      {/* Sidebar */}
      <motion.div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-4 md:hidden`}
        initial={{ x: '-100%' }}
        animate={{ x: isMenuOpen ? 0 : '-100%' }}
        exit={{ x: '-100%' }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Sidebar Content */}
        <div className="flex justify-between items-center mb-6">
          <Logo />
          <button
            className="text-white text-2xl"
            onClick={() => setIsMenuOpen(false)} // Close the sidebar
          >
            &times;
          </button>
        </div>
        {/* Mobile Links */}
        <ul className="space-y-6">
          <li>
            <Link to="/" className="block text-lg hover:text-sky-500"
            onClick={() => setIsMenuOpen(false)} // Close the sidebar
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="block text-lg hover:text-sky-500"
            onClick={() => setIsMenuOpen(false)} // Close the sidebar
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/about" className="block text-lg hover:text-sky-500"
            onClick={() => setIsMenuOpen(false)} // Close the sidebar
            >
              About
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/profile" className="block text-lg hover:text-sky-500"
                onClick={() => setIsMenuOpen(false)} // Close the sidebar
                >
                  Profile
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    setIsMenuOpen(false); // Close the sidebar
                    window.location.reload();
                  }}
                  className="block text-lg hover:text-red-500"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="block text-lg hover:text-sky-500"
                onClick={() => setIsMenuOpen(false)} // Close the sidebar
                >
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="block text-lg hover:text-sky-500"
                onClick={() => setIsMenuOpen(false)} // Close the sidebar
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </motion.div>

    </nav>
  );
};

export default Navbar;
