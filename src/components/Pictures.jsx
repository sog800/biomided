import React from "react";
import { motion } from "framer-motion"; // For animations

const Pictures = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-16 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Image Grid with Motion Animations */}
      <div className="flex justify-center gap-12">
        {/* Healthy Food Image */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="w-full sm:w-1/2 lg:w-1/3 relative group"
        >
          <img
            src="https://res.cloudinary.com/ddhmjhtot/image/upload/v1740083247/freepik__the-style-is-candid-image-photography-with-natural__34424_ynl2f0.jpg"
            alt="Healthy Food"
            className="rounded-lg shadow-xl transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg group-hover:opacity-0 transition-opacity duration-300 ease-in-out"></div>
          <p className="absolute bottom-4 left-4 text-white text-lg font-semibold">
            A working together will improve hearthy.
          </p>
        </motion.div>

        {/* Sport Image */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full sm:w-1/2 lg:w-1/3 relative group"
        >
          <img
            src="https://res.cloudinary.com/ddhmjhtot/image/upload/v1740083257/freepik__the-style-is-candid-image-photography-with-natural__34425_nhombg.jpg"
            alt="Sport"
            className="rounded-lg shadow-xl transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg group-hover:opacity-0 transition-opacity duration-300 ease-in-out"></div>
          <p className="absolute bottom-4 left-4 text-white text-lg font-semibold">
            Movement keeps the spirit vibrant.
          </p>
        </motion.div>

        {/* Happy People Image */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full sm:w-1/2 lg:w-1/3 relative group"
        >
          <img
            src="https://res.cloudinary.com/ddhmjhtot/image/upload/v1740083650/freepik__the-style-is-candid-image-photography-with-natural__94179_bxndxp.jpg"
            alt="Happy People"
            className="rounded-lg shadow-xl transform transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-30 rounded-lg group-hover:opacity-0 transition-opacity duration-300 ease-in-out"></div>
          <p className="absolute bottom-4 left-4 text-white text-lg font-semibold">
            Lets treat our patients with love and kind
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pictures;
