import React from "react";

const LifeSection = ({ theme }) => {
  return (
    <section
      className={`py-16 mt-6 ${
        theme === "dark" ? "bg-gray-800" : "bg-emerald-50"
      }`}
    >
      <div className="container mx-auto px-4 text-center">
        <h2
          className={`text-4xl font-bold ${
            theme === "dark" ? "text-emerald-400" : "text-emerald-600"
          } mb-4`}
        >
          Healthy Living
        </h2>
        <p
          className={`text-lg ${
            theme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Discover the transformative power of healthy living and natural beauty
          solutions. From practical tips to expert advice, we bring you content
          that inspires and empowers.
        </p>
      </div>
    </section>
  );
};

export default LifeSection;
