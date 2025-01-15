import React from "react";
import { FaPython, FaReact, FaDatabase, FaGithub, FaLinkedin } from "react-icons/fa";

// Custom SOGtech Logo SVG Component
const SOGtechLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 50"
    width="100"
    height="50"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
  >
    <text x="5" y="35" fontSize="28" fontWeight="bold" fill="currentColor">
      SOGtech
    </text>
  </svg>
);

const AboutPage = ({ theme }) => {
  return (
    <section
      className={`min-h-screen py-16 ${
        theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-emerald-50 text-gray-700"
      } transition-all duration-500 ease-in-out mt-24`}
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h1
          className={`text-4xl font-extrabold text-center mb-8 ${
            theme === "dark" ? "text-emerald-400" : "text-emerald-600"
          } animate-fade-in`}
        >
          About Biomided
        </h1>

        {/* Purpose Section */}
        <div className="mb-12 text-center animate-slide-in">
          <p className="text-lg mb-6">
            Welcome to **Biomided**, an educational platform dedicated to making lives better.
            Our goal is to provide you with insightful articles, tips, and resources to help you lead a healthier and happier life. Biomided empowers individuals with the knowledge to make informed decisions about their health and well-being.
          </p>
          <p className="text-lg">
            Biomided is built with the latest web technologies, making it easy to navigate and explore our content. The website also provides the best recommendations to ensure you live your best life.
          </p>
        </div>

        {/* Builders Section */}
        <div className="mb-12 text-center animate-slide-in">
          <h2
            className={`text-3xl font-semibold mb-6 ${
              theme === "dark" ? "text-emerald-400" : "text-emerald-600"
            }`}
          >
            Web Builders: SOGtech
          </h2>
          <SOGtechLogo />
          <p className="text-lg mt-4">
            SOGtech is the team behind Biomided, a group of passionate web developers and designers dedicated to building solutions that make a real impact. With expertise in front-end and back-end development, our team ensures Biomided is not only user-friendly but also scalable and reliable.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-12">
          <h2
            className={`text-3xl font-semibold text-center mb-6 ${
              theme === "dark" ? "text-emerald-400" : "text-emerald-600"
            }`}
          >
            Our Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
              <FaPython className="text-emerald-500 text-6xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800">Python Backend</h3>
              <p className="text-gray-600 text-sm">
                Proficient in Django and Flask for creating robust APIs and scalable applications.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
              <FaReact className="text-sky-500 text-6xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800">React Frontend</h3>
              <p className="text-gray-600 text-sm">
                Skilled in building dynamic user interfaces with React and Tailwind CSS.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:scale-105 transition-transform">
              <FaDatabase className="text-emerald-500 text-6xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800">Database Design</h3>
              <p className="text-gray-600 text-sm">
                Experience with relational databases like PostgreSQL and MySQL, and basic NoSQL databases.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-emerald-600 text-white py-6 px-4 rounded-lg shadow-lg text-center animate-bounce-in">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">📞</span>
              <span>+265 894344260</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl">📧</span>
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
