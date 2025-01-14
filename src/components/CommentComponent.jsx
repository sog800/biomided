import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import framer-motion for animation

const CommentComponent = ({ postId, theme }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState(null);

  // Fetch comments when the component mounts or postId changes
  useEffect(() => {
    fetch(`https://biomidedbackend.onrender.com/blog/${postId}/comments/`, { method: "GET" })
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => setError("Failed to load comments"));
  }, [postId]);

  // Handle submitting new comment
  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (newComment.trim() === "") {
      setError("Comment cannot be empty");
      return;
    }

    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");

    // Redirect to the login page if the token is not found
    if (!token) {
      window.location.href = "/login"; // Replace with your actual login page URL
      return;
    }

    // Make the POST request to add the comment
    fetch(`https://biomidedbackend.onrender.com/blog/${postId}/add-comment/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Token ${token}`, // Use the token in the Authorization header
      },
      body: new URLSearchParams({
        content: newComment,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Comment added successfully") {
          setComments([data.comment, ...comments]); // Prepend new comment
          setNewComment(""); // Reset the input field
          setError(null); // Reset error state
        } else {
          setError("Error posting comment");
        }
      })
      .catch((error) => setError("Error posting comment"));
  };

  return (
    <div
      className={`space-y-6 p-6 rounded-xl shadow-lg ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}
    >
      {/* Comments list */}
      <div className="space-y-6">
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className={`p-5 rounded-lg shadow-md border ${theme === "dark" ? "bg-gray-700" : "bg-gray-100"}`}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-4"></div> {/* Placeholder for avatar */}
                <p className={`font-semibold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>{comment.author}</p>
              </div>
              <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>{comment.content}</p>
              <small className={`${theme === "dark" ? "text-gray-500" : "text-gray-600"}`}>{comment.posted_at}</small>
            </div>
          ))
        ) : (
          <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            Be the first to comment!
          </p>
        )}
      </div>

      {/* Error message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}

      {/* New comment form */}
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <motion.textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a professional comment..."
          className={`w-full h-24 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${theme === "dark" ? "bg-gray-700 text-white border-gray-500" : "bg-white"}`}
          animate={{
            scale: newComment.length > 0 ? 1.02 : 1,
            transition: { type: "spring", stiffness: 150, damping: 15 },
          }}
        />
        <motion.button
          type="submit"
          className={`mt-4 w-full py-3 rounded-lg ${theme === "dark" ? "bg-blue-600 text-white" : "bg-blue-600 text-white"} hover:bg-blue-700 transition`}
          whileTap={{ scale: 0.98 }} // Shrink the button slightly when clicked
        >
          Submit Comment
        </motion.button>
      </form>
    </div>
  );
};

export default CommentComponent;
