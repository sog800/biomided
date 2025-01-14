import React from "react";

const Footer = ({ theme }) => {
  return (
    <footer
      className={`py-8 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-emerald-700 text-white"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12">
        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-emerald-300 transition duration-200"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-emerald-300 transition duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="hover:text-emerald-300 transition duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-emerald-300 transition duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://facebook.com"
                  className="hover:text-emerald-300 transition duration-200"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="hover:text-emerald-300 transition duration-200"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="hover:text-emerald-300 transition duration-200"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm mb-2">Email: contact@biomidedblog.com</p>
            <p className="text-sm">Phone: +264 894 344 206</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-400">
          © 2025 BiomidedBlog. All rights reserved. powered by SOGtech
        </div>
      </div>
    </footer>
  );
};

export default Footer;
