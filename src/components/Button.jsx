import React from "react";

const Button = ({ label, onClick, theme }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-lg font-bold rounded-lg transition ${
        theme === "dark"
          ? "bg-sky-500 text-white hover:bg-sky-600"
          : "bg-emerald-600 text-white hover:bg-emerald-700"
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
