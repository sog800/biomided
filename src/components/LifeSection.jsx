import React from "react";
import { motion } from "framer-motion"; // For animations

const LifeSection = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-16  ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Elevate Your Lifestyle
        </h2>
        <p className="text-xl mb-8">
          Simple changes make a meaningful difference in your well-being.
        </p>
      </div>


      <div className="flex flex-wrap justify-center p-4 gap-8">
        {/* Healthy Food Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="w-full sm:w-1/2 lg:w-1/3 relative lg:right-6 "
        >
          <img
            src="https://res.cloudinary.com/ddhmjhtot/image/upload/v1736849303/cld-sample-4.jpg"
            alt="Healthy Food"
            className="rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <p className="mt-4 text-lg font-medium">
            A balanced meal fuels a balanced life.
          </p>
        </motion.div>

        {/* Sport Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full sm:w-1/2 lg:w-1/3 relative top-16 lg:left-6"
        >
          <img
            src="https://res.cloudinary.com/ddhmjhtot/image/upload/v1736849303/cld-sample-3.jpg"
            alt="Sport"
            className="rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <p className="mt-4 text-lg font-medium">
            Movement keeps the spirit vibrant.
          </p>
        </motion.div>

        
        {/* Happy People Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full sm:w-1/2 lg:w-1/3 relative top-20 lg:left-4"
        >
          <img
            src="https://res.cloudinary.com/ddhmjhtot/image/upload/v1736849297/samples/two-ladies.jpg"
            alt="Happy People"
            className="rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <p className="mt-4 text-lg font-medium">
            Joy shared is joy multiplied.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LifeSection;
