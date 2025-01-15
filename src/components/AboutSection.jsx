import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import { Link } from "react-router-dom";

const AboutSection = ({ theme }) => {
  return (
    <section
      className={`py-16 mt-6 ${theme === "dark" ? "bg-gray-800" : "bg-emerald-50"}`}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-emerald-600"} mb-6`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to Our Blogging Community
        </motion.h2>

        <motion.p
          className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"} border-b-2 border-gray-300 pb-4`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <em>
            We are passionate about sharing knowledge and experiences on health,
            beauty, and natural living. This platform is not just about one voice—
            it’s a community where like-minded individuals can come together to
            share their unique perspectives and ideas. Whether you’re a seasoned
            expert or just starting, we welcome you to join us in making a difference.
          </em>
        </motion.p>

        {/* Benefits Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3
            className={`text-2xl font-semibold ${
              theme === "dark" ? "text-emerald-400" : "text-emerald-600"
            }`}
          >
            Why Contribute to This Blog?
          </h3>
          <motion.p
            className={`mt-4 text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            By sharing your knowledge, you can inspire and educate readers around
            the world. Contributing to this blog allows you to showcase your
            expertise, connect with a like-minded audience, and make a positive
            impact on people’s lives.
          </motion.p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="bg-emerald-600 text-white px-6 py-4 rounded-lg shadow-lg inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p>
              Interested in blogging with us? Reach out to us via email at{" "}
              <a
                href="mailto:your-email@example.com"
                className="underline hover:text-emerald-300"
              >
                daniellongwe800@gmail.com
              </a>{" "}
              or leave your details in the feedback section.
            </p>
          </motion.div>
        </motion.div>

        {/* Feedback Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Link
            to="/feedback"
            className="bg-emerald-500 text-white px-8 py-3 rounded-full text-lg font-bold transition transform hover:scale-105 hover:bg-emerald-600"
          >
            Send Feedback
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
