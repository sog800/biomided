import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4  flex justify-between items-center">
        {/* Logo */}
        <Logo />

        {/* Links for larger screens */}
        <ul className="hidden md:flex space-x-6">
          <Link  to="/" className="text-emerald-600 hover:text-sky-500">
            Home
          </Link>
          <Link to="/about" className="text-emerald-600 hover:text-sky-500">
            About
          </Link>
          <Link to="/blogs" className="text-emerald-600 hover:text-sky-500">
            Blogs
          </Link>
          <Link to="/contact" className="text-emerald-600 hover:text-sky-500">
            Contact
          </Link>
        </ul>

        {/* Hamburger Menu */}
        <button
          className="md:hidden text-emerald-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-emerald-50 py-2 space-y-2">
          <a href="#home" className="block text-emerald-600 hover:text-sky-500">
            Home
          </a>
          <a href="#about" className="block text-emerald-600 hover:text-sky-500">
            About
          </a>
          <a href="#blog" className="block text-emerald-600 hover:text-sky-500">
            Blog
          </a>
          <a href="#contact" className="block text-emerald-600 hover:text-sky-500">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
