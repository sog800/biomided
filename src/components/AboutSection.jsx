import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

const AboutSection = ({ theme }) => {
  return (
    <section
      className={`py-16 mt-6 ${theme === "dark" ? "bg-gray-800" : "bg-emerald-50"}`}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-emerald-600"} mb-4`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About the Author
        </motion.h2>

        <motion.p
          className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"} border-b-2 border-gray-300`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <em>
            Hi, I’m <strong>Daniel Cyrus Longwe</strong>, I hold a diploma in biomedical science
            and am deeply passionate about sharing practical insights on health,
            beauty, and natural living. Through a clear understanding of how our
            amazing bodies work and function, I aim to empower you with knowledge
            that makes a real difference. Join me on this exciting journey as we
            explore the best tips, backed by science and experience, to help you
            achieve a healthier, happier, and more vibrant life. Let’s unlock the
            secrets to feeling your best—naturally!
          </em>
        </motion.p>

        {/* Animating the benefits of reading this blog */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-emerald-600">How This Page Can Help Your Life</h3>
          <motion.p
            className="mt-4 text-lg text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Reading this blog empowers you to make healthier, informed decisions
            about your well-being. Discover insights on how your body functions and
            how natural living can boost your energy, vitality, and happiness. Through
            practical, science-backed advice, you will be equipped to live a more vibrant
            life, free from unnecessary stress and struggles.
          </motion.p>
        </motion.div>

        {/* Engaging call to action */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.button
            className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-bold transition transform hover:scale-105 hover:bg-emerald-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Reading Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
