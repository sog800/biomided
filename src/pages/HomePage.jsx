import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import LifeSection from "../components/LifeSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import { GoArrowRight } from "react-icons/go";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import AdvertiseSection from "../components/AdvertiseSection";
import getRandomLinks from "../utils/random";

const HomePage = ({ theme }) => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  var imageLink = "";

  const handleClick = () => {
    navigate("/blogs"); // Redirect to /blogs page when clicked
  };

  useEffect(() => {
    fetch("https://biomidedbackend.onrender.com/blog/all-blogs/", { // Corrected URL
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
    <>
      <Header theme={theme} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 py-24 text-center text-white">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 animate-fade-in">
          Ready to Transform Your Life? 
        </h2>
        <p className="text-xl sm:text-2xl mb-6 opacity-80">Start your journey toward wellness, beauty, and vitality with us.</p>
        <Button label="Start Now" onClick={handleClick} theme={theme} />
      </section>

      {/* Latest Blogs Section */}
      <section className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-8 text-gray-900">
            Latest Insights from Our Blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog) => (
              <Card
                theme={theme}
                blogId={blog.id}
                key={blog.id}
                image={blog.blogImage || (imageLink = getRandomLinks())}
                title={blog.title}
                description={`${blog.description.substring(0, 100)}...`}
                onReadMore={() => alert(`Read more about: ${blog.title}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* View More Button */}
      <section className="flex justify-center items-center py-8 bg-gray-800">
        <Button label="View More Blogs ->" onClick={handleClick} theme={theme} />
      </section>

      {/* Life Section */}
      <LifeSection theme={theme} />

      {/* About Section */}
      <AboutSection theme={theme} />

      {/* Advertise Section */}
      <AdvertiseSection theme={theme} />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomePage;
