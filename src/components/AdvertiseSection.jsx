import React from "react";
import { FaLaptopCode, FaPalette, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const AdvertiseSection = ({ theme }) => {
  return (
    <section
      className={`py-16 ${
        theme === "dark" ? "bg-gray-900" : "bg-emerald-50"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="container mx-auto px-6 lg:px-12 text-center">
        {/* Heading */}
        <h2
          className={`text-3xl sm:text-4xl font-extrabold mb-6 animate-fade-in ${
            theme === "dark" ? "text-emerald-400" : "text-emerald-600"
          }`}
        >
          Need a Website for Your Business or Event?
        </h2>

        {/* Subheading */}
        <p
          className={`text-lg mb-8 animate-slide-in ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Create stunning, professional websites with modern designs tailored to
          your needs. Whether it's for your business, personal projects, or
          special events, we've got you covered!
        </p>

        {/* Icons and Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Modern Designs */}
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <FaPalette className="text-sky-500 text-5xl sm:text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Modern Designs</h3>
            <p className="text-gray-600 text-sm mt-2">
              Sleek, user-friendly designs that make your website stand out.
            </p>
          </div>

          {/* Custom Solutions */}
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <FaLaptopCode className="text-emerald-500 text-5xl sm:text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Custom Solutions</h3>
            <p className="text-gray-600 text-sm mt-2">
              Websites tailored specifically to your business or event.
            </p>
          </div>

          {/* Responsive Design */}
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <FaPalette className="text-sky-500 text-5xl sm:text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Responsive Design</h3>
            <p className="text-gray-600 text-sm mt-2">
              Optimized for all devices, from mobile to desktop.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-emerald-600 text-white py-8 px-6 rounded-lg shadow-lg animate-bounce-in">
          <p className="text-lg sm:text-xl font-semibold mb-4">Contact Us Today</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-2xl sm:text-3xl" />
              <span className="text-sm sm:text-lg">+265 894344206</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-2xl sm:text-3xl" />
              <span className="text-sm sm:text-lg">daniellongwe800@mail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseSection;
