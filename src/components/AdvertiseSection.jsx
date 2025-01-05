import React from "react";
import { FaLaptopCode, FaPalette, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const AdvertiseSection = ({ theme }) => {
  return (
    <section
      className={`py-16 ${
        theme === "dark" ? "bg-gray-900" : "bg-emerald-50"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2
          className={`text-4xl font-bold mb-6 animate-fade-in ${
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {/* Modern Designs */}
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <FaPalette className="text-sky-500 text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Modern Designs</h3>
            <p className="text-gray-600 text-sm mt-2">
              Sleek, user-friendly designs that make your website stand out.
            </p>
          </div>

          {/* Custom Solutions */}
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <FaLaptopCode className="text-emerald-500 text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Custom Solutions</h3>
            <p className="text-gray-600 text-sm mt-2">
              Websites tailored specifically to your business or event.
            </p>
          </div>

          {/* Responsive Design */}
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
            <FaPalette className="text-sky-500 text-6xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">Responsive Design</h3>
            <p className="text-gray-600 text-sm mt-2">
              Optimized for all devices, from mobile to desktop.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-emerald-600 text-white py-6 px-4 rounded-lg shadow-lg animate-bounce-in">
          <p className="text-lg font-semibold mb-4">Contact Us Today</p>
          <div className="flex justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-xl" />
              <span>+265 894344206</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-xl" />
              <span>daniellongwe800@mail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseSection;
