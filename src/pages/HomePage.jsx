import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import LifeSection from "../components/LifeSection";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import AdvertiseSection from "../components/AdvertiseSection";
import getRandomLinks from "../utils/random";
import { FiBatteryCharging } from "react-icons/fi";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "The best way to predict the future is to create it. - Abraham Lincoln",
  "It is never too late to be what you might have been. - George Eliot",
  "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
  "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
];

const HomePage = ({ theme }) => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 8000); // Change quote every 8 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleClick = () => {
    navigate("/blogs"); // Redirect to /blogs page when clicked
  };

  useEffect(() => {
    fetch("https://biomidedbackend.onrender.com/blog/all-blogs/", {
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
    <div>
      <Navbar />
      <Header theme={theme} />

      {/* Hero Section */}
      <section className="flex flex-col sm:flex-row p-8 py-24 space-y-8 sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-1/2 p-4">
          <img
            src="https://res.cloudinary.com/ddhmjhtot/image/upload/w_1920,h_1080,c_fill,q_auto,f_auto/v1737241179/pexels-alexander-suhorucov-6457563_muwkz6.jpg"
            alt="Art of Life"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        {/* Quotes */}
        <div className="w-full sm:w-1/2 mx-auto rounded bg-yellow-200 p-4">
          <div className="relative overflow-hidden h-24">
            <div
              className="absolute inset-0 transition-all duration-1000 ease-in-out"
              style={{ transform: `translateY(-${quoteIndex * 100}%)` }}
            >
              {quotes.map((quote, index) => (
                <div
                  key={index}
                  className="h-24 flex items-center justify-center text-xl font-semibold text-gray-800"
                >
                  <p>
                    <em>{quote}</em>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <FiBatteryCharging size={200} className="text-black" />
        </div>
      </section>

      {/* Life Section */}
      <LifeSection theme={theme} />

      {/* Welcome Section */}
      <section
        className={`py-16 mt-6 ${theme === "dark" ? "bg-gray-800" : "bg-emerald-50"}`}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className={`text-3xl sm:text-4xl font-bold ${theme === "dark" ? "text-white" : "text-emerald-600"} mb-6`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Our Blogging Community
          </motion.h2>

          <motion.p
            className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-700"} border-b-2 border-gray-300 pb-4`}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <em>
              We are passionate about sharing knowledge and experiences on
              health, beauty, and natural living. This platform is not just
              about one voice— it’s a community where like-minded individuals
              can come together to share their unique perspectives and ideas.
              Whether you’re a seasoned expert or just starting, we welcome you
              to join us in making a difference.
            </em>
          </motion.p>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-16 bg-white">
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
                authorName={blog.author_name}
                authorImage={blog.author_image}
                postDate={new Date(blog.posted_at).toLocaleDateString()}
                likes={blog.blog_likes}
                comments={blog.comments.length}
                authorBio={blog.author_bio}
              />
            ))}
          </div>
        </div>

        {/* View More Blogs Button */}
        <div className="flex justify-center mt-6">
          <Button
            label="View More Blogs ->"
            onClick={handleClick}
            theme={theme}
            className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold rounded-full shadow-md transition-transform hover:scale-105"
          />
        </div>
      </section>

      {/* Advertise Section */}
      <AdvertiseSection theme={theme} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
