import react from "react";

import "./HeaderHome.css";
import SearchBar from "./SearchBar";

const HeaderHome = () => {
  return (
    <div className="headerHome blueBG container-concept">
      <h2>A lifetime of discounts? It's Genius.</h2>
      <p>
        Get rewarded for your travels - unlock instant savings of 10% or more a
        free account
      </p>
      <div>
        <button className="blueButton">Sign in / Register</button>
      </div>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};

export default HeaderHome;
