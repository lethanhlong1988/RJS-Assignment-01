import React from "react";

import SearchForm from "./SearchForm";

import "./SearchBar.css";
const SearchBar = () => {
  const searchHandler = (e) => {
    e.preventDefault();
    console.log("Hi");
    window.location.replace("/search");
  };
  return (
    <div className="bg ">
      <div className="searchBar_bar">
        <div className="searchBar">
          <SearchForm />
          <button className="blueButton" onClick={searchHandler}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
