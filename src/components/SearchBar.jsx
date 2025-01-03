import React, { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", query);
    // Add search functionality here in the future
  };

  return (
    <div className="flex items-center justify-center py-4">
      <input
        type="text"
        placeholder="Search articles..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-sky-500 text-white rounded-r-lg hover:bg-sky-600 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
