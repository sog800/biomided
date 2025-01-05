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

const HomePage = ({ theme }) => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/blogs"); // Removed the colon before blogId
  };

  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Header theme={theme} />
      <section
        className={`py-16 mt-6 ${
          theme === "dark" ? "bg-gray-800" : "bg-emerald-50"
        }`}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <Card
              theme={theme}
              blogId={blog.id}
              key={blog.id}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              onReadMore={() => alert(`Read more about: ${blog.title}`)}
            />
          ))}
        </div>
      </section>
      <section className="flex justify-center items-center py-8 bg-gray-800"> 
        <Button label={`Vew more ->`} onClick={handleClick} theme={theme} />
      </section>

      <LifeSection theme={theme} />
      <AboutSection theme={theme} />
      <AdvertiseSection theme={theme} />
      <Footer />
    </>
  );
};

export default HomePage;
