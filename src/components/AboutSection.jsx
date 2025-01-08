import React from "react";

const AboutSection = ({ theme }) => {
  return (
    <section
      className={`py-16 mt-6 ${
        theme === "dark" ? "bg-gray-800" : "bg-emerald-50"
      }`}
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
            theme === "dark" ? "text-gray-300" : "text-gray-700"} border-b-2 border-gray-300`}
        >
          <em>Hi, I’m <stron>Daniel Cyrus Longwe</stron>, I hold a diploma in biomedical science
          and am deeply passionate about sharing practical insights on health,
          beauty, and natural living. Through a clear understanding of how our
          amazing bodies work and function, I aim to empower you with knowledge
          that makes a real difference. Join me on this exciting journey as we
          explore the best tips, backed by science and experience, to help you
          achieve a healthier, happier, and more vibrant life. Let’s unlock the
          secrets to feeling your best—naturally!</em>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
