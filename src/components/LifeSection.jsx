import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animation

const LifeSection = ({ theme }) => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={videoRef}
      className={`py-16 mt-6 ${theme === "dark" ? "bg-gray-800" : "bg-emerald-50"}`}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className={`text-4xl font-bold ${theme === "dark" ? "text-emerald-400" : "text-emerald-600"} mb-4`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Healthy Living
        </motion.h2>
        <motion.p
          className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"} mb-8`}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Discover the transformative power of healthy living and natural beauty
          solutions. From practical tips to expert advice, we bring you content
          that inspires and empowers.
        </motion.p>

        {/* YouTube Video */}
        <motion.div
          className="relative w-full max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/Y8HIFRPU6pM?autoplay=${isInView ? 1 : 0}&mute=1`}
            title="Healthy Living Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg transition-transform transform hover:scale-105"
          ></iframe>
        </motion.div>

        {/* Optional Button or Additional Content */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.button
            className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-bold transition-transform transform hover:scale-105 hover:bg-emerald-700"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Healthy Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default LifeSection;
