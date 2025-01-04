import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";

const AsideCard = ({ title, description }) => (
  <div className="bg-white shadow-md rounded-lg p-4">
    <h3 className="text-xl font-semibold text-emerald-600">{title}</h3>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);

const BlogsPage = () => {
  const [blogs, setBlogs] = React.useState([]);

  React.useEffect(() => {
    fetch("blogs.json")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error(error));
  }, []);

  const asideContent = [
    { title: "Sponsored Ad", description: "Check out our latest offers!" },
    { title: "Newsletter Signup", description: "Subscribe for updates." },
  ];

  return (
    <>
      <Header />

      <section className="py-8 bg-emerald-50 text-center">
        <h1 className="text-4xl font-extrabold text-emerald-600">
          Explore Our Blogs
        </h1>
      </section>

      <section className="py-4 bg-white">
        <SearchBar />
      </section>

      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <aside className="hidden lg:block lg:col-span-2">
            <div className="space-y-6">
              {asideContent.map((content, index) => (
                <AsideCard
                  key={index}
                  title={content.title}
                  description={content.description}
                />
              ))}
            </div>
          </aside>

          <div className="container mx-auto px-4 grid grid-cols-1 gap-8 lg:col-span-8">
            {blogs.map((blog) => (
              <Card
                blogId={blog.id}
                key={blog.id}
                image={blog.image}
                title={blog.title}
                description={blog.description}
              />
            ))}
          </div>

          <aside className="hidden lg:block lg:col-span-2">
            <div className="space-y-6">
              {asideContent.map((content, index) => (
                <AsideCard
                  key={index}
                  title={content.title}
                  description={content.description}
                />
              ))}
            </div>
          </aside>

        </div>
      </section>

      <FeedbackSection />
      
      <Footer />
    </>
  );
};

export default BlogsPage;
