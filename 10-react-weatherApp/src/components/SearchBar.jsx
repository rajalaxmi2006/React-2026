import React, { useState } from "react";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    onSearch(trimmed);
  };
  return (
    <div>
      <form className="search-bar" onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
