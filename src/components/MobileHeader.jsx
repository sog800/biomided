import React, { useState } from 'react';
import { FaBars, FaHome, FaUser, FaPen, FaQuestionCircle, FaStar, FaBook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function MobileHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuLinks = [
    { icon: <FaUser size={20} />, text: 'Profile', link: '/profile' },
    { icon: <FaHome size={20} />, text: 'Home', link: '/' },
    { icon: <FaPen size={20} />, text: 'Bloggers', link: '/bloggers' },
    { icon: <FaPen size={20} />, text: 'Become a Blogger', link: '/become-a-blogger' },
    { icon: <FaQuestionCircle size={20} />, text: 'FAQ', link: '/faq' },
    { icon: <FaStar size={20} />, text: 'Life Journey', link: '/life-journey' },
    { icon: <FaBook size={20} />, text: 'Series', link: '/series' },
  ];

  return (
    <div >
      {/* Mobile Header */}
      <header className="flex justify-between items-center p-4 bg-black fixed top-0 left-0 right-0 z-50 text-white">
        

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-full bg-white text-black w-2/3"
        />

        {/* Hamburger Icon */}
        <button
          className="text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars size={24} />
        </button>
      </header>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 z-50 w-64 bg-black text-white h-full transition-transform transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <Logo />
        <div className="p-4">
          <button
            className="text-white mb-4"
            onClick={() => setMenuOpen(false)}
          >
            <FaBars size={24} />
          </button>
          <div className="space-y-4">
            {menuLinks.map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="flex items-center space-x-3 p-2 hover:bg-emerald-700 rounded-lg"
              >
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
