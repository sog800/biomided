import React from "react";
import { useNavigate } from "react-router-dom";
import { FaThumbsUp, FaCommentDots } from "react-icons/fa";

const Card = ({ 
  image, 
  title, 
  description, 
  blogId, 
  authorName, 
  authorImage, 
  postDate, 
  likes, 
  comments,
  authorBio

}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blogs/${blogId}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-emerald-50 text-gray-900 shadow-md my-10 mx-6 rounded-lg overflow-hidden transform hover:scale-105 transition"
    >
      
      <div className="p-4 cursor-pointer">
        {/* Author Details */}
        <div className="flex items-center mb-3">
          <img
            src={authorImage || "https://via.placeholder.com/40"}
            alt={authorName}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <p className="text-sm font-bold">{authorName}</p>
            <p className="text-xs text-gray-500">Recomended: posted @{postDate}</p>
            <p className="text-xs text-gray-500" ><em>{authorBio}</em></p>
          </div>
        </div>


        <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover cursor-pointer"
      />

        {/* Blog Title and Description */}
        <h2 className="text-lg font-bold text-emerald-600">{title}</h2>
        <p className="text-sm text-emerald-600 my-2">{description}</p>

        {/* Read More Link */}
        <div
          onClick={handleClick}
          className="block text-sm text-blue-600 cursor-pointer"
        >
          Read More
        </div>

        {/* Likes and Comments */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center text-gray-500 text-sm">
            <FaThumbsUp className="mr-2" /> {likes} Likes
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <FaCommentDots className="mr-2" /> {comments} Comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
