import React, { useState, useEffect } from "react";
import AsideCard from "../components/AsideCard";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import handleLikes from "../utils/handlelikes";
import { HiOutlineThumbUp } from "react-icons/hi";

const BlogReadingPage = ({ theme }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    fetch(`https://biomidedbackend.onrender.com/blog/blog/${id}/`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blog data.");
        }
        return response.json();
      })
      .then((data) => {
        setBlog(data);
        setLikes(data.blog_likes); // Set initial likes from the blog data
        const savedLike = localStorage.getItem(`isLiked-${id}`);
        if (savedLike) {
          setIsLiked(JSON.parse(savedLike)); // Parse boolean from localStorage
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("An error occurred while fetching blog data.");
        setLoading(false);
      });
  }, [id]);

  const handleLikeClick = () => {
    handleLikes(isLiked, likes, setLikes, setIsLiked, id); // Update backend
    localStorage.setItem(`isLiked-${id}`, JSON.stringify(!isLiked)); // Save like state
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <header>
        <Navbar theme={theme} />
      </header>
      <section
        className={`pt-20 mt-16 py-8 ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-emerald-50 text-center"
        }`}
      >
        <h1 className="text-5xl font-extrabold text-emerald-600 text-center">
          {blog.title}
        </h1>
      </section>
      <section
        className={`py-16 ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-emerald-50"
        }`}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={handleLikeClick}
                className={`flex items-center gap-2 text-3xl ${
                  isLiked ? "text-blue-600" : "text-gray-600"
                }`}
              >
                <HiOutlineThumbUp /> {likes}
              </button>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Comments</h3>
              {/* Comments Section */}
            </div>
          </div>
        </div>
      </section>
      <FeedbackSection theme={theme} />
      <Footer />
    </>
  );
};

export default BlogReadingPage;

