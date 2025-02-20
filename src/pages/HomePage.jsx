import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Pictures from "../components/Pictures";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import AdvertiseSection from "../components/AdvertiseSection";
import getRandomLinks from "../utils/random";
import { FiBatteryCharging } from "react-icons/fi";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const quotes = [
  "Wherever the art of medicine is loved, there is also a love of humanity. - Hippocrates",
  "The greatest wealth is health. - Virgil",
  "Healing is a matter of time, but it is sometimes also a matter of opportunity. - Hippocrates",
  "Medicine is a science of uncertainty and an art of probability. - William Osler",
  "The doctor of the future will give no medicine, but will interest his patients in the care of the human frame. - Thomas Edison",
  "Prevention is better than cure. - Desiderius Erasmus",
  "To cure sometimes, to relieve often, to comfort always. - Edward Livingston Trudeau",
  "Medicine is not only a science; it is also an art. - Paracelsus",
  "The best doctor gives the least medicine. - Benjamin Franklin",
  "Doctors are not just healers, they are also caregivers. - Unknown",
  "Health is not valued until sickness comes. - Thomas Fuller",
  "A good doctor treats the disease; a great doctor treats the patient who has the disease. - Unknown",
  "In nothing do men more nearly approach the gods than in giving health to men. - Cicero",
  "Let food be thy medicine and medicine be thy food. - Hippocrates",
  "Medicine is the restoration of discordant elements. - Leonardo da Vinci",
  "A physician without a knowledge of astrology has no right to call himself a physician. - Hippocrates",
  "An ounce of prevention is worth a pound of cure. - Benjamin Franklin",
  "The first wealth is health. - Ralph Waldo Emerson",
  "The art of medicine consists of amusing the patient while nature cures the disease. - Voltaire",
  "The physician should not treat the disease but the patient who is suffering from it. - Maimonides"
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

      {/*pictures */}
      <Pictures theme={theme} />

      {/* topics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
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
