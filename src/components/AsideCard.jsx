import React from "react";

const AsideCard = ({ title, description, theme }) => {
  const themeClass =
    theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-700";

  return (
    <div
      className={`${themeClass} shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 hidden lg:block`}
    >
      <h3
        className={`text-lg font-bold ${
          theme === "dark" ? "text-emerald-500" : "text-emerald-600"
        } mb-2`}
      >
        {title}
      </h3>
      <p
        className={`${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
      >
        {description}
      </p>
    </div>
  );
};

export default AsideCard;
