import { React } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, description, blogId, theme }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blogs/${blogId}`); // Removed the colon before blogId
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-emerald-50 text-gray-900"
      } shadow-md my-10 mx-6 rounded-lg overflow-hidden transform hover:scale-105 transition`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover cursor-pointer"
      />
      <div className="p-4 cursor-pointer">
        <h2
          className={`text-lg font-bold ${
            theme === "dark" ? "text-emerald-400" : "text-emerald-600"
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-sm ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          } my-2`}
        >
          {description}
        </p>
        <div
          onClick={handleClick}
          className={`block text-sm ${
            theme === "dark" ? "text-blue-400" : "text-blue-600"
          }`}
        >
          Read More
        </div>
      </div>
    </div>
  );
};

export default Card;
