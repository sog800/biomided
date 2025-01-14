import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import getRandomLinks from "../utils/random";

const AsideCard = ({ title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h3 className="text-xl font-semibold text-emerald-600">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

var imageLink = "";

const BlogsPage = ({ theme }) => {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    fetch("https://biomidedbackend.onrender.com/blog/all-blogs", { // Updated URL
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);

  const asideContent = [
    { title: "Sponsored Ad", description: "ads!" },
    { title: "Newsletter Signup", description: "ads." },
  ];

  return (
    <>
      

      <section
        className={`py-8 mt-10 ${theme === "dark" ? "bg-gray-800" : "bg-emerald-50"} text-center mt-16`}
      >
        <h1
          className={`text-4xl font-extrabold ${theme === "dark" ? "text-white" : "text-emerald-600"}`}
        >
          Explore Blogs 📚
        </h1>
      </section>

      <section
        className={`py-4 ${theme === "dark" ? "bg-gray-700" : "bg-white"}`}
      >
        <SearchBar theme={theme} />
      </section>

      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-800" : "bg-emerald-50"}`}
      >
        <div className="container mx-auto justify-center px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-2"></div>
          <div className="lg:col-span-8 flex justify-center">
            <div className="container mx-auto px-4 grid grid-cols-1 gap-8">
              {blogs.map((blog) => (
                <Card
                  theme={theme}
                  blogId={blog.id}
                  key={blog.id}
                  image={blog.blogImage || (imageLink = getRandomLinks())}
                  title={blog.title}
                  description={blog.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <FeedbackSection theme={theme} />
      <Footer />
    </>
  );
};

export default BlogsPage;
