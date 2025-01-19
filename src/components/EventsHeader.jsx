import React, { useState } from "react";
import { FaHome, FaUsers, FaSearch, FaUserCircle } from "react-icons/fa";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function EventsHeader() {
    const [isLogedIn, setIsLogedIn] = useState(false)

    React.useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setIsLogedIn(true)
        }
    },
    [])
  return (
    <header className="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Search Bar */}
        <div className="flex items-center  bg-white rounded-full px-4 py-1 mx-4 flex-1">
          <FaSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search events or posts"
            className="bg-transparent outline-none px-2 flex-1 text-gray-700"
          />
        </div>

        {/* Navigation Icons */}
        <div className="flex items-center space-x-6">
          <Link
            to='/'
            className="flex items-center justify-center p-2 rounded-full hover:bg-emerald-700"
            title="Home"

          >
            <FaHome size={20} />
          </Link>
          <button
            className="flex items-center justify-center bg-emerald-500 p-2 rounded-full hover:bg-emerald-700"
            title="Join biomided Community"
          >
            <FaUsers size={20} />
          </button>
             {/* Profile Icon */}
             <div
            className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white cursor-pointer flex items-center justify-center"
            title="Profile"
          >
            {isLogedIn && user.image ? (
              <img
                src={user.image}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <FaUserCircle size={30} className="text-gray-600" />
            )}
            </div>
        </div>
      </div>
    </header>
  );
}

