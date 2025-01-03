import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-sky-500 text-white text-lg font-bold rounded-lg hover:bg-sky-600 transition"
    >
      {label}
    </button>
  );
};

export default Button;
