import { React } from "react";
import {useNavigate } from "react-router-dom";


const Card = ({ image, title, description, blogId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blogs/:${blogId}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition"
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-emerald-600">{title}</h2>
        <p className="text-sm text-gray-600 my-2">{description}</p>
        <div onClick={handleClick} className="block text-sm text-blue-600">
          Read More
        </div>
      </div>
    </div>
  );
};

export default Card;
