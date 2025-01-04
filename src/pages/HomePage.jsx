import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import LifeSection from "../components/LifeSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <Header />
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <Card
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
      <LifeSection />
      <AboutSection />
      <Footer />
    </>
  );
};

export default HomePage;
