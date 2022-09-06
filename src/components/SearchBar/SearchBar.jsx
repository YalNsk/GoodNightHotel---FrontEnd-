import React from "react";
import { useState } from "react";

const SearchBar = ({ placeholder, onSearch }) => {
  const [input, setinput] = useState();

  const handClick = () => {
    onSearch(input);
  };

  return (
    <div className="recherche">
      <input
        type="text"
        value={input}
        onInput={(e) => setinput(e.target.value)}
        placeholder={placeholder}
      />
      <button onClick={handClick}>Search</button>
    </div>
  );
};

export default SearchBar;
