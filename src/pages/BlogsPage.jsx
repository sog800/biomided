import React, { useState } from "react";
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
  const [blogs, setBlogs] = React.useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  React.useEffect(() => {
    fetch("https://biomidedbackend.onrender.com/blog/all-blogs", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);

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
            ? "bg-gray-800 text-white"
            : "bg-emerald-50 text-gray-900"
        }`}
      >
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          {/* Left Aside (Sliding Navigation) */}
          <aside
            className={`fixed top-0 left-0 w-64 bg-white shadow-lg z-40 lg:relative lg:col-span-2 lg:block transition-transform overflow-y-scroll h-screen ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
          >
            <div className="p-4 space-y-4 lg:h-full">
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
                    className="flex items-center space-x-3 p-2 hover:bg-emerald-100 rounded-lg"
                  >
                    <span>{item.icon}</span>
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Blogs Section */}
          <main className="lg:col-span-8 z-10 lg:mx-16 overflow-y-scroll h-screen">
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
          </main>

          {/* Right Aside (SOGtech Services) */}
          <aside className="lg:col-span-2 hidden lg:block overflow-y-scroll h-screen">
            <div
              className="space-y-6 rounded-lg p-4 text-white"
              style={{
                background:
                  "linear-gradient(135deg, #1e3a8a, #3b82f6, #2563eb)",
              }}
            >
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
