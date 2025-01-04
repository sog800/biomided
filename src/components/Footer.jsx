import React from "react";

const Footer = ({theme}) => {
  return (
    <footer className="bg-emerald-700 text-white py-6">
      <div className="container mx-auto px-4 text-center md:text-left">
        {/* Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#blog" className="hover:underline">Blog</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Follow Us</h3>
            <ul className="space-y-1">
              <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
              <li><a href="https://twitter.com" className="hover:underline">Twitter</a></li>
              <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p>Email: contact@biomidedblog.com</p>
            <p>Phone: +264 894 344 206</p>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-4 text-sm">
          © 2025 BiomidedBlog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
