import React, { useState, useEffect } from "react";
import { FaBars, FaHome, FaPython, FaReact, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiDjango } from "react-icons/si";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EventsHeader from "../components/EventsHeader";
import Card from "../components/Card";
import getRandomLinks from "../utils/random";
import MobileHeader from "../components/MobileHeader";
import AdvertiseSection from "../components/AdvertiseSection";

const BlogsPage = ({ theme }) => {
  const [blogs, setBlogs] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://biomidedbackend.onrender.com/blog/all-blogs?page=${page}`)
      .then((response) => response.json())
      .then((data) => setBlogs((prevBlogs) => [...prevBlogs, ...data]))
      .catch((error) => console.error(error));
  }, [page]);

  const loadMoreBlogs = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const rightAsideServices = [
    { icon: <FaPython size={32} />, title: "Python Programming" },
    { icon: <FaDatabase size={32} />, title: "Data Analysis" },
    { icon: <SiDjango size={32} />, title: "Django Backend Development" },
    { icon: <FaReact size={32} />, title: "React Development" },
    { icon: <SiTailwindcss size={32} />, title: "Tailwind CSS Styling" },
    { icon: <FaHome size={32} />, title: "Full-Stack Web Development" },
  ];

  const leftAsideLinks = [
    { icon: <FaHome size={20} />, text: "Home", link: "/" },
    { icon: "✍️", text: "Bloggers", link: "/bloggers" },
    { icon: "🖋️", text: "Become a Blogger", link: "/become-a-blogger" },
    { icon: "📩", text: "Send Feedback", link: "/feedback" },
    { icon: "❓", text: "FAQ", link: "/faq" },
    { icon: "🌟", text: "Life Journey", link: "/life-journey" },
    { icon: "📖", text: "Series", link: "/series" },
  ];

  return (
    <>
      <div className="lg:block hidden">
        <EventsHeader />
      </div>
      <div className="lg:hidden sm:block">
        <MobileHeader />
      </div>

      <div
        className={`py-16 ${
          theme === "dark"
            ? "bg-gray-900 text-white"
            : "bg-gradient-to-br from-emerald-50 to-emerald-100 text-gray-900"
        }`}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          {/* Left Aside (Sliding Navigation) */}
          <aside
            className={`w-64 bg-gradient-to-b from-gray-100 to-gray-200 shadow-lg lg:col-span-2 lg:block transition-transform overflow-y-auto h-auto ${
              menuOpen ? "block" : "hidden"
            } lg:block rounded-lg p-4`}
          >
            <button
              className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars size={20} />
              <span>{menuOpen ? "Close" : "Menu"}</span>
            </button>
            <div className="space-y-3">
              {leftAsideLinks.map((item, index) => (
                <a
                  href={item.link}
                  key={index}
                  className="flex items-center space-x-3 p-2 hover:bg-emerald-200 rounded-lg text-gray-800 font-medium"
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </aside>

          {/* Main Blogs Section */}
          <main className="lg:col-span-8 z-10 lg:mx-16 overflow-y-auto h-auto">
            <div className="grid grid-cols-1 gap-8">
              {blogs.map((blog) => (
                <Card
                  blogId={blog.id}
                  key={blog.id}
                  image={blog.blogImage || getRandomLinks()}
                  title={blog.title}
                  description={blog.description}
                  authorName={blog.author_name}
                  authorImage={blog.author_image}
                  postDate={new Date(blog.posted_at).toLocaleDateString()}
                  likes={blog.blog_likes}
                  comments={blog.comments.length}
                  authorBio={blog.author_bio}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <button
                onClick={loadMoreBlogs}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg hover:from-emerald-600 hover:to-teal-700 shadow-lg transition-transform transform hover:scale-105"
              >
                Load More Blogs
              </button>
            </div>
          </main>

          {/* Right Aside (SOGtech Services) */}
          <aside className="lg:col-span-2 hidden lg:block overflow-y-auto h-auto bg-gradient-to-b from-indigo-500 to-indigo-700 text-white rounded-lg p-4">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">SOGtech Services</h3>
              <p className="mb-4">
                Transform your ideas with cutting-edge solutions.
              </p>
              {rightAsideServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg"
                >
                  {service.icon}
                  <span className="text-lg font-medium">{service.title}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <div className="lg:hidden border-t-2 border-gray-300 ">
        <AdvertiseSection />
      </div>
      <Footer />
    </>
  );
};

export default BlogsPage;
