import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import LifeSection from "../components/LifeSection";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

const HomePage = () => {
  const blogs = [
    {
      image: "path/to/image1.jpg",
      title: "The Secret to Radiant Skin",
      description: "Discover how natural remedies can enhance your beauty.",
    },
    {
      image: "path/to/image2.jpg",
      title: "Healthy Eating Habits",
      description: "Learn the essentials of a balanced diet for wellness.",
    },
    {
      image: "path/to/image3.jpg",
      title: "Staying Active",
      description: "Fitness tips to keep you healthy and energized.",
    },
    {
      image: "path/to/image4.jpg",
      title: "Mindful Living",
      description: "Reduce stress and find peace through mindfulness.",
    },
  ];

  return (
    <>
      <Header/>
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <Card
              key={index}
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