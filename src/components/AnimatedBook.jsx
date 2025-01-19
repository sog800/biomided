import React from "react";

const AnimatedBook = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width="300"
      height="300"
    >
      {/* Book Back Cover */}
      <rect
        x="50"
        y="50"
        width="100"
        height="100"
        fill="black"
        stroke="white"
        strokeWidth="2"
        rx="4"
      >
        <animate
          attributeName="x"
          from="50"
          to="30"
          dur="1s"
          begin="click"
          repeatCount="1"
          id="clickRepeat"
        />
      </rect>
    </svg>
  );
};

export default AnimatedBook;
