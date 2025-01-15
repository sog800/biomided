import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineThumbUp, HiOutlineChat } from "react-icons/hi";
import AsideCard from "../components/AsideCard";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";
import handleLikes from "../utils/handlelikes";
import CommentComponent from "../components/CommentComponent";
import { motion } from "framer-motion"; // Add animation import

const BlogReadingPage = ({ theme }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isClicked, setIsClicked] = useState(false); // For handling like button click animation

  useEffect(() => {
    fetch(`https://biomidedbackend.onrender.com/blog/blogs/${id}/`, {
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
    setIsClicked(true); // Trigger the animation
    setTimeout(() => setIsClicked(false), 500); // Reset the animation after 500ms

    if (likes === 0 && isLiked) {
      setIsLiked(false); // Set isLiked to false, but don't decrement likes
    } else {
      handleLikes(isLiked, likes, setLikes, setIsLiked, id); // Update backend and frontend
    }
    localStorage.setItem(`isLiked-${id}`, JSON.stringify(!isLiked)); // Save like state
  };

  if (loading) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-lg text-red-500">Error: {error}</div>
    );
  }

  return (
    <>
      <section
        className={`pt-20 mt-16 py-8 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-emerald-50 text-black"}`}
      >
        <div className="container mx-auto px-4 text-center mt-24">
          <motion.h1
            className="text-5xl font-extrabold text-emerald-600 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {blog.title}
          </motion.h1>

          {/* Author Info */}
          <motion.div
            className="flex justify-center items-center m-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img
              src={`${blog.author_image}`}
              alt={blog.author_name}
              className="rounded-full mt-16 object-cover mr-4"
              style={{ width: "200px", height: "200px" }}
            />
            <div className="text-sm text-gray-200 mt-16">
              <p>Author:   {blog.author_name}</p>
              <p>Posted on:  {new Date(blog.posted_at).toLocaleDateString()}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className={`py-16 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-emerald-50"}`}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-2 col-span-1">
            {/* Left Aside Card */}
            <AsideCard />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 col-span-1 mx-auto">
            <motion.div
              className="mb-8 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p>{blog.description}</p>
            </motion.div>

            <div
              className="blog-content-container mb-8 mx-auto prose max-w-3xl"
              dangerouslySetInnerHTML={{
                __html: blog.content
                  ? blog.content.replace(/\n/g, "<br>").replace(/\n\n/g, "<p></p>")
                  : "",
              }}
            />

            {/* Like and Comments Section */}
            <motion.div
              className="flex items-center gap-8 mb-8 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <motion.button
                onClick={handleLikeClick}
                className={`flex items-center gap-2 text-3xl ${isLiked ? "text-blue-600" : "text-gray-400"} hover:text-blue-500 transition-colors`}
                animate={{
                  scale: isClicked ? 1.2 : 1,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
              >
                <HiOutlineThumbUp /> {likes}
              </motion.button>

              <div className="flex items-center gap-2 text-3xl text-gray-400">
                <HiOutlineChat /> {blog.comments.length}
              </div>
            </motion.div>

            {/* Comment Section */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <CommentComponent theme={theme} postId={blog.id} />
              </div>
            </section>
          </div>

          <div className="lg:col-span-2 col-span-1">
            {/* Right Aside Card */}
            <AsideCard />
          </div>
        </div>
      </section>

      {/* Mobile Layout for Asides */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="block lg:hidden">
            <AsideCard />
            <AsideCard />
          </div>
        </div>
      </section>

      <FeedbackSection theme={theme} />
      <Footer />
    </>
  );
};

export default BlogReadingPage;
