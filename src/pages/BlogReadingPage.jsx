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

  useEffect(() => {
    fetch("http://127.0.0.1:8000/bloggs/api/all-blogs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch blog data.");
        }
        return response.json();
      })
      .then((data) => {
        const cleanedId = id.startsWith(":") ? id.slice(1) : id;
        const foundBlog = data.find((blog) => String(blog.id) === cleanedId);
        if (foundBlog) {
          setBlog(foundBlog);
        } else {
          setError("Blog not found.");
        }
        setLoading(false);
      })
      .catch((error) => {
        setError("An error occurred while fetching blog data.");
        setLoading(false);
      });
  }, [id]);

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const likeStatus = () => {
    localStorage.setItem("isLiked", isLiked);
  };
  useEffect(() => {
    const savedLike = localStorage.getItem("isLiked");
    if (savedLike) {
      setIsLiked(savedLike);
    }
  });

  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleAddComment = () => {
    if (commentInput.trim()) {
      setComments((prev) => [...prev, commentInput]);
      setCommentInput("");
    }
  };

  const asideContent = [
    { title: "Sponsored Ad", description: "ads" },
    { title: "Newsletter Signup", description: "ads" },
  ];

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
      <section className={`pt-20 mt-16 py-8 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-emerald-50 text-center"}`}>
        <h1 className="text-5xl font-extrabold text-emerald-600 text-center">{blog.title}</h1>
      </section>
      <section className={`py-16 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-emerald-50"}`}>
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
          <aside className="hidden lg:block lg:col-span-2">
            <div className="space-y-6">
              {asideContent.map((content, index) => (
                <AsideCard theme={theme} key={index} title={content.title} description={content.description} />
              ))}
            </div>
          </aside>
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <img src={blog.authorImage} alt={blog.author} className="w-16 h-16 rounded-full" />
              <div>
                <h3 className="text-2xl font-semibold">Author: {blog.author}</h3>
                <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>{blog.bio}</p>
                <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Posted at: {blog.created_at}</p>
                <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}><i>{blog.description}</i></p>
              </div>
            </div>
            <div className="mb-8">
              <div className={`${theme === "dark" ? "text-white" : "text-black"} text-lg leading-relaxed font-serif`}>
                {blog.content.split("\r\n\r").map((paragraph, index) => (
                  <p key={index} className="mb-6">
                    {paragraph.split("<br>").map((line, lineIndex) => (
                      <React.Fragment key={lineIndex}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <button onClick={() => handleLikes(isLiked, likes, setLikes, setIsLiked, id)} className={`flex items-center gap-2 text-3xl ${isLiked ? "text-blue-600" : "text-gray-600"}`}>
                <HiOutlineThumbUp /> {likes}
              </button>
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Comments</h3>
              <div className="space-y-4">
                {comments.map((comment, index) => (
                  <div key={index} className={`p-4 shadow-md rounded-lg ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white"}`}>
                    {comment}
                  </div>
                ))}
                {comments.length === 0 && (
                  <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>No comments yet. Be the first to comment!</p>
                )}
              </div>
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Add a comment..."
                  className={`flex-1 p-2 border rounded-lg ${theme === "dark" ? "bg-gray-700 text-white border-gray-600" : "border-gray-300"}`}
                />
                <button onClick={handleAddComment} className="bg-emerald-600 text-white px-4 py-2 rounded-lg">
                  Comment
                </button>
              </div>
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
