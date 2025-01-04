import React from "react";

const AboutSection = ({ theme }) => {
  return (
    <section
      className={`py-16 mt-6 ${theme === "dark" ? "bg-gray-800" : "bg-emerald-50"}`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-4xl font-bold ${
            theme === "dark" ? "text-white" : "text-emerald-600"
          } mb-4`}
        >
          About the Author
        </h2>
        <p
          className={`text-lg ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Hi, I'm [Author Name], passionate about sharing insights on health,
          beauty, and natural living. Join me on this journey to discover the best
          tips for a healthier, happier life.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
