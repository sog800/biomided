import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import LifeSection from "../components/LifeSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import AdvertiseSection from "../components/AdvertiseSection";
import getRandomLinks from "../utils/random";

const HomePage = ({ theme }) => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const imageLink = "";

  const handleClick = () => {
    navigate("/blogs"); // Redirect to /blogs page when clicked
  };

  useEffect(() => {
    fetch("https://biomidedbackend.onrender.com/blog/all-blogs/", {
      // Corrected URL
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin", // Or 'include' if you need cookies
    })
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="mt-16">
      <Header theme={theme} />

      {/* Hero Section */}
      <section className="relative  py-24 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-center text-white">
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
        <div className="relative z-10">
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-8 animate-fade-in tracking-wide">
            Ready to Transform Your Life?
          </h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Start your journey toward wellness, beauty, and vitality with us.
          </p>
          <Button
            label="Start Now"
            onClick={handleClick}
            theme={theme}
            className="px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold rounded-full shadow-lg transition transform hover:scale-105"
          />
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-gray-900">
            Latest Insights from Our Blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.slice(0, 3).map((blog) => (
              <Card
                theme={theme}
                blogId={blog.id}
                key={blog.id}
                image={blog.blogImage || getRandomLinks()} // Fixed assignment
                title={blog.title}
                description={`${blog.description.substring(0, 100)}...`}
                onReadMore={() => navigate(`/blogs/${blog.id}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* View More Blogs Button */}
      <section className="py-8 bg-gradient-to-r from-gray-800 to-gray-900 flex justify-center">
        <Button
          label="View More Blogs ->"
          onClick={handleClick}
          theme={theme}
          className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold rounded-full shadow-md transition transform hover:scale-105"
        />
      </section>

      {/* Life Section */}
      <LifeSection theme={theme} />

      {/* About Section */}
      <AboutSection theme={theme} />

      {/* Advertise Section */}
      <AdvertiseSection theme={theme} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
