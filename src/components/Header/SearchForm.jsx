import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form action="">
      <div className="input_controls">
        <div className="input_control">
          <FontAwesomeIcon className="icon" icon="fa-bed" />
          <input type="text" placeholder="Where are you going?" />
        </div>
        <div className="input_control">
          <FontAwesomeIcon className="icon" icon="fa-calendar" />
          <input type="date" placeholder="" />
        </div>
        <div className="input_control">
          <FontAwesomeIcon className="icon" icon="fa-female" />
          <input type="text" placeholder="1 adult・0 children・1 room" />
        </div>
      </div>
    </form>
  );
};

export default SearchForm;
