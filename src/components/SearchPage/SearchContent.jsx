import react from "react";

import "./SearchContent.css";
import SearchPopup from "./SearchPopup";
import SearchList from "./SearchList";

const SearchContent = () => {
  return (
    <div className="SearchContent_container">
      <div className="SearchContent_concept">
        <div className="searchConcept1">
          <SearchPopup />
        </div>
        <div className="searchConcept2">
          <SearchList />
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
