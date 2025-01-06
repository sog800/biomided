import React from "react";

const AsideCard = ({ title, description, theme, isVisible }) => {
  const themeClass =
    theme === "dark" ? "bg-gray-800 text-white" : "text-gray-700";

  return (
    <div
      className={`${
        isVisible ? "block" : "hidden"
      } ${themeClass} shadow-md  p-4 hover:shadow-lg transition-shadow duration-300 lg:block`}
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
