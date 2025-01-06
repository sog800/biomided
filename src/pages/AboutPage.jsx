import React from "react";
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const AboutPage = ({ theme }) => {
  return (
    <section
      className={`min-h-screen py-16 ${
        theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-emerald-50 text-gray-700"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1
          className={`text-4xl font-extrabold text-center mb-8 ${
            theme === "dark" ? "text-emerald-400" : "text-emerald-600"
          } animate-fade-in`}
        >
          About This Website
        </h1>

        {/* Purpose Section */}
        <div className="mb-12 text-center animate-slide-in">
          <p className="text-lg mb-6">
            Welcome to my portfolio showcase! This website demonstrates my
            skills in full-stack development, utilizing a Python backend and
            modern frontend technologies like React and Tailwind CSS. It's a
            platform to exhibit my ability to build professional, responsive,
            and interactive web applications.
          </p>
          <p className="text-lg">
            My goal is to create innovative solutions for businesses and
            individuals while continuously expanding my expertise in web
            development.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2
            className={`text-3xl font-semibold text-center mb-6 ${
              theme === "dark" ? "text-emerald-400" : "text-emerald-600"
            }`}
          >
            My Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
              <FaPython className="text-emerald-500 text-6xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800">Python Backend</h3>
              <p className="text-gray-600 text-sm">
                Proficient in Django and Flask for creating robust APIs and
                scalable applications.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
              <FaReact className="text-sky-500 text-6xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800">React Frontend</h3>
              <p className="text-gray-600 text-sm">
                Skilled in building dynamic user interfaces with React and
                Tailwind CSS.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
              <FaDatabase className="text-emerald-500 text-6xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800">Database Design</h3>
              <p className="text-gray-600 text-sm">
                Experience with relational databases like PostgreSQL and
                MySQL, and basic NoSQL databases.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-emerald-600 text-white py-6 px-4 rounded-lg shadow-lg text-center animate-bounce-in">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-xl" />
              <span>+265 894344260</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-xl" />
              <span>daniellongwe800@gmail.com</span>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-6">
            <a
              href="https://github.com/yourgithubusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedinusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
