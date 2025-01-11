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
    fetch("https://biomidedbackend.onrender.com/blog/all-blogs", { // Corrected URL
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
      <section
        className={`py-16 mt-6 ${theme === "dark" ? "bg-gray-800" : "bg-emerald-50"}`}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </section>
      <section className="flex justify-center items-center py-8 bg-gray-800">
        <Button label={`View more ->`} onClick={handleClick} theme={theme} />
      </section>

      <LifeSection theme={theme} />
      <AboutSection theme={theme} />
      <AdvertiseSection theme={theme} />
      <Footer />
    </>
  );
};

export default HomePage;
