import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { HiOutlineThumbUp, HiOutlineChat, HiHome, HiDocumentText } from "react-icons/hi";
import AsideCard from "../components/AsideCard";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";
import handleLikes from "../utils/handlelikes";
import CommentComponent from "../components/CommentComponent";
import { motion } from "framer-motion";
import Logo from "../components/Logo";

const BlogReadingPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
        setLikes(data.blog_likes);
        const savedLike = localStorage.getItem(`isLiked-${id}`);
        if (savedLike) {
          setIsLiked(JSON.parse(savedLike));
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("An error occurred while fetching blog data.");
        setLoading(false);
      });
  }, [id]);

  const handleLikeClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);

    if (likes === 0 && isLiked) {
      setIsLiked(false);
    } else {
      handleLikes(isLiked, likes, setLikes, setIsLiked, id);
    }
    localStorage.setItem(`isLiked-${id}`, JSON.stringify(!isLiked));
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
      <section className="bg-white text-black">
        <header className="flex justify-between bg-black sm:px-16 pt-4 fixed z-50 top-0 right-0 left-0 items-center px-4 py-4">
          <Logo />
          <div className="flex gap-4">
            <Link to="/" className="text-2xl text-white hover:text-emerald-500" title="Home">
              <HiHome />
            </Link>
            <Link to="/blogs" className="text-2xl text-white hover:text-emerald-500" title="Blogs">
              <HiDocumentText />
            </Link>
          </div>
        </header>

        <div className="container mx-auto px-4 text-center pb-16 mt-24">
          <motion.h1
            className="text-5xl font-extrabold text-emerald-600 mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {blog.title}
          </motion.h1>

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
            <div className="text-sm text-gray-700 mt-16">
              <p>Author: {blog.author_name}</p>
              <p>Posted on: {new Date(blog.posted_at).toLocaleDateString()}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white text-black">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-2 col-span-1">
            <AsideCard />
          </div>

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

            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <CommentComponent postId={blog.id} />
              </div>
            </section>
          </div>

          <div className="lg:col-span-2 col-span-1">
            <AsideCard />
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="block lg:hidden">
            <AsideCard />
            <AsideCard />
          </div>
        </div>
      </section>

      <FeedbackSection />
      <Footer />
    </>
  );
};

export default BlogReadingPage;
