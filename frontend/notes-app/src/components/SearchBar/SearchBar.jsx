import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import "../SearchBar/SearchBar.css";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Search Notes"
        className="searchbar-input"
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className="searchbar-icon close-icon"
          onClick={onClearSearch}
        />
      )}

      <FaMagnifyingGlass
        className="searchbar-icon search-icon"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
