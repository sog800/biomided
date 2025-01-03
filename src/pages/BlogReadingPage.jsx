import React, { useState } from "react";
import Header from "../components/Header";
import AsideCard from '../components/AsideCard';
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";

const BlogReadingPage = () => {
  // State for like and heart interactions
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [hearts, setHearts] = useState(0);
  const [isHearted, setIsHearted] = useState(false);

  // Comments state
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  // Dummy author info
  const author = {
    name: "John Doe",
    profileImage: "path/to/profile.jpg",
    bio: "A passionate writer about health and natural beauty.",
    fullInfo:
      "John Doe is a health enthusiast and professional blogger, sharing insights into living a healthier life with natural remedies and practices.",
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  const handleHeart = () => {
    setIsHearted(!isHearted);
    setHearts((prev) => (isHearted ? prev - 1 : prev + 1));
  };

  const handleAddComment = () => {
    if (commentInput.trim()) {
      setComments((prev) => [...prev, commentInput]);
      setCommentInput("");
    }
  };

  const asideContent = [
    { title: "Sponsored Ad", description: "Check out our latest offers!" },
    { title: "Newsletter Signup", description: "Subscribe for updates." },
  ];

  return (
    <>
      {/* Header Section */}
      <Header links={[{ name: "Home", path: "/" }, { name: "Blogs", path: "/blogs" }]} />

      {/* Blog Title */}
      <section className="py-8 bg-emerald-50 text-center">
        <h1 className="text-4xl font-extrabold text-emerald-600">
          The Secret to Radiant Skin
        </h1>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Aside */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="space-y-6">
              {asideContent.map((content, index) => (
                <AsideCard key={index} title={content.title} description={content.description} />
              ))}
            </div>
          </aside>

          {/* Main Blog Content */}
          <div className="lg:col-span-8">
            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8">
              <img
                src={author.profileImage}
                alt={author.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold">{author.name}</h3>
                <p className="text-gray-600">{author.bio}</p>
              </div>
            </div>

            {/* Blog Body */}
            <div className="mb-8">
              <p className="text-gray-700">
                Radiant skin is a sign of good health and beauty. Learn how natural remedies can
                enhance your beauty and make you feel confident.
              </p>
            </div>

            {/* Interaction Icons */}
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 ${isLiked ? "text-blue-600" : "text-gray-600"}`}
              >
                👍 {likes}
              </button>
              <button
                onClick={handleHeart}
                className={`flex items-center gap-2 ${isHearted ? "text-red-600" : "text-gray-600"}`}
              >
                ❤️ {hearts}
              </button>
            </div>

            {/* Comment Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Comments</h3>
              <div className="space-y-4">
                {comments.map((comment, index) => (
                  <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                    {comment}
                  </div>
                ))}
                {comments.length === 0 && (
                  <p className="text-gray-600">No comments yet. Be the first to comment!</p>
                )}
              </div>
              <div className="mt-4 flex gap-2">
                <input
                  type="text"
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Add a comment..."
                  className="flex-1 p-2 border rounded-lg"
                />
                <button
                  onClick={handleAddComment}
                  className="bg-emerald-600 text-white px-4 py-2 rounded-lg"
                >
                  Comment
                </button>
              </div>
            </div>

            {/* Author Info Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">About the Author</h3>
              <p className="text-gray-700">{author.fullInfo}</p>
            </div>
          </div>

          {/* Right Aside */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="space-y-6">
              {asideContent.map((content, index) => (
                <AsideCard key={index} title={content.title} description={content.description} />
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

export default BlogReadingPage;
