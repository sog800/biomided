import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { refreshAccessToken } from "../utils/authUtils"; // Assuming you have a utility function to refresh the token

export function Dashboard() {
  const [profile, setProfile] = useState({
    name: "Name Loading....",
    email: "Email Loading....",
    bio: "Bio loading......",
    profilePicture: "https://via.placeholder.com/150",
  });
  const [blogStats, setBlogStats] = useState({
    totalBlogs: 0,
    totalLikes: 0,
    drafts: 0,
  });
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    content: "",
  });
  const [previewContent, setPreviewContent] = useState("");
  const [error, setError] = useState(null); // For storing any errors during fetch

  // Token refresh and redirection if expired
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const accessExpiry = localStorage.getItem("access_expiry");
    const currentTime = Math.floor(Date.now() / 1000); // Get current time in seconds

    // If token is expired, try refreshing it
    if (token && accessExpiry && currentTime >= accessExpiry) {
      refreshAccessToken()
        .then(() => {
          // Successfully refreshed, we can fetch the data
          fetchProfile();
          fetchBlogStats();
        })
        .catch(() => {
          // If token refresh fails, redirect to login page
          window.location.href = "/login"; // Redirect using window.location
        });
    } else if (token) {
      // If token is still valid, fetch data directly
      fetchProfile();
      fetchBlogStats();
    } else {
      // If there's no token, redirect to login page
      window.location.href = "/login"; // Redirect using window.location
    }
  }, []); // No navigate dependency, useEffect runs once

  // Fetch profile data
  async function fetchProfile() {
    try {
      const response = await fetch("http://127.0.0.1:8000/auth/profile/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setProfile({
          name: data.user?.username || "John Doe",
          email: data.user?.email || "johndoe@example.com",
          bio: data.bio || "Tell us about yourself",
          profilePicture:
            data.profile_picture || "https://via.placeholder.com/150",
        });
      } else {
        setError("Error fetching profile");
      }
    } catch (error) {
      setError("Error fetching profile");
    }
  }

  // Fetch blog statistics
  async function fetchBlogStats() {
    try {
      const response = await fetch("http://127.0.0.1:8000/blog/stats/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${localStorage.getItem("access_token")}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setBlogStats({
          totalBlogs: data.totalBlogs || 0,
          totalLikes: data.totalLikes || 0,
          drafts: data.drafts || 0,
        });
      } else {
        setError("Error fetching blog stats");
      }
    } catch (error) {
      setError("Error fetching blog stats");
    }
  }

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert("Profile updated!");
  };

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    alert("Blog published!");
    setNewBlog({ title: "", description: "", content: "" });
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <Navbar />
      <h1 className="text-2xl font-bold mb-4 mt-6">Dashboard</h1>

      {error && <p className="text-red-500">{error}</p>}

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Blogs</h2>
          <p className="text-3xl font-bold">{blogStats.totalBlogs}</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Likes</h2>
          <p className="text-3xl font-bold">{blogStats.totalLikes}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Drafts</h2>
          <p className="text-3xl font-bold">{blogStats.drafts}</p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-gray-100 p-6 rounded shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Profile</h2>
        <div className="flex items-center space-x-6 mb-6">
          <img
            src={profile.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full border border-gray-300"
          />
          <div>
            <h3 className="text-lg font-semibold">{profile.name}</h3>
            <p className="text-gray-600">{profile.email}</p>
          </div>
        </div>
        <form onSubmit={handleProfileUpdate}>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Bio</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded"
              rows="4"
              value={profile.bio}
              onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>
      </div>

      {/* Blog Editor Section */}
      <div className="bg-gray-100 p-6 rounded shadow-md mb-6">
        <h2 className="text-xl font-bold mb-4">Write a Blog</h2>
        <form onSubmit={handleBlogSubmit}>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              placeholder="Enter your blog title"
              value={newBlog.title}
              onChange={(e) =>
                setNewBlog({ ...newBlog, title: e.target.value })
              }
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Description</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded"
              rows="3"
              placeholder="Enter a short description"
              value={newBlog.description}
              onChange={(e) =>
                setNewBlog({ ...newBlog, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">Content</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded"
              rows="10"
              placeholder="Write your blog content here"
              value={newBlog.content}
              onChange={(e) => {
                setNewBlog({ ...newBlog, content: e.target.value });
                setPreviewContent(e.target.value);
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
          >
            Publish
          </button>
        </form>
      </div>

      {/* Blog Preview Section */}
      <div className="bg-gray-100 p-6 rounded shadow-md">
        <h2 className="text-xl font-bold mb-4">Live Preview</h2>
        <div className="p-4 border border-gray-300 rounded">
          {previewContent || "Start typing to see the preview..."}
        </div>
      </div>
    </div>
  );
}
