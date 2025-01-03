import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";

const AsideCard = ({ title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h3 className="text-xl font-semibold text-emerald-600">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

const BlogsPage = () => {
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

  const asideContent = [
    { title: "Sponsored Ad", description: "Check out our latest offers!" },
    { title: "Newsletter Signup", description: "Subscribe for updates." },
  ];

  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Page Title */}
      <section className="py-8 bg-emerald-50 text-center">
        <h1 className="text-4xl font-extrabold text-emerald-600">
          Explore Our Blogs
        </h1>
      </section>

      {/* Search Bar */}
      <section className="py-4 bg-white">
        <SearchBar />
      </section>

      {/* Blogs Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Aside */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="space-y-6">
              {asideContent.map((content, index) => (
                <AsideCard
                  key={index}
                  title={content.title}
                  description={content.description}
                />
              ))}
            </div>
          </aside>

          {/* Main Blog Section */}
          <div className="lg:col-span-8">
            <div className="space-y-8">
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
          </div>

          {/* Right Aside */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="space-y-6">
              {asideContent.map((content, index) => (
                <AsideCard
                  key={index}
                  title={content.title}
                  description={content.description}
                />
              ))}
            </div>
          </aside>
        </div>
      </section>

      {/* Feedback Section */}
      <FeedbackSection />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default BlogsPage;
