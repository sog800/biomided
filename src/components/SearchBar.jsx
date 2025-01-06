import React, { useState } from "react";

const SearchBar = ({ theme }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert("search engine under contruction");
  };

  return (
    <div
      className={`flex items-center justify-center py-4 ${
        theme === "dark" ? "bg-gray-800" : "bg-emerald-50"
      }`}
    >
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={`w-full max-w-md px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 ${
          theme === "dark"
            ? "bg-gray-700 text-white border-gray-600 focus:ring-sky-400"
            : "bg-white text-gray-800 border-gray-300 focus:ring-sky-500"
        }`}
      />
      <button
        onClick={handleSearch}
        className={`px-4 py-2 rounded-r-lg transition ${
          theme === "dark"
            ? "bg-sky-500 text-white hover:bg-sky-600"
            : "bg-sky-600 text-white hover:bg-sky-700"
        }`}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
