import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { FiUser } from "react-icons/fi";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { BiDonateHeart } from "react-icons/bi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = localStorage.getItem("token");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-lg text-white bg-black">
      <div className="lg:px-4 mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="hover:scale-105 transition-transform">
          <Logo />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-lg">
          <Link
            to="/"
            className="hover:text-yellow-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="hover:text-yellow-500 transition-colors"
          >
            Blogs
          </Link>
          <Link
            to="/about"
            className="hover:text-yellow-500 transition-colors"
          >
            About
          </Link>
          {isLoggedIn ? (
            <>
              <Link
                to="/profile"
                className="hover:text-yellow-500 transition-colors"
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
                className="hover:text-red-500 transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-yellow-500 transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:text-yellow-500 transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </ul>

        {/* Profile Icon */}
        <Link to="/profile" className="hidden md:block text-2xl">
          <FiUser className="hover:text-yellow-500 transition-colors" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-4 text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <motion.div
        className="fixed top-0 left-0 h-full bg-black text-white w-64 p-4 md:hidden"
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Sidebar Content */}
        <div className="flex justify-between items-center mb-6">
          <div className="hover:scale-105 transition-transform">
            <Logo />
          </div>
          <button
            className="text-white text-2xl"
            onClick={() => setIsMenuOpen(false)} // Close the sidebar
          >
            &times;
          </button>
        </div>
        {/* Mobile Links */}
        <ul className="space-y-6 text-lg">
          <li>
            <Link
              to="/"
              className="block hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/blogs"
              className="block hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:text-yellow-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link
                  to="/profile"
                  className="block hover:text-yellow-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
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
                  className="block hover:text-red-500 transition-colors"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="block hover:text-yellow-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="block hover:text-yellow-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
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
