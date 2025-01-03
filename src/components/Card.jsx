import React from "react";

const Card = ({ image, title, description, onReadMore }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-emerald-600">{title}</h2>
        <p className="text-sm text-gray-600 my-2">{description}</p>
        <button
          onClick={onReadMore}
          className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
