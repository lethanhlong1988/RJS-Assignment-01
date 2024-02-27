import react from "react";

import "./SearchPopup.css";

const SearchPopup = () => {
  return (
    <div className="SearchPopup_container">
      <div className="SearchPopup_concept">
        <h1>Search</h1>
        <div>
          <label htmlFor="">Destination</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Check-in Date</label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="">Option</label>
          <div className="inform">
            <div>
              <label htmlFor="">Min price per night</label>
              <input type="number" />
            </div>
            <div>
              <label htmlFor="">Max price per night</label>
              <input type="number" />
            </div>
            <div>
              <label htmlFor="">Aldult</label>
              <input type="number" />
            </div>
            <div>
              <label htmlFor="">Children</label>
              <input type="number" />
            </div>
            <div>
              <label htmlFor="">Room</label>
              <input type="text" />
            </div>
          </div>
        </div>
        <button>Search</button>
      </div>
    </div>
  );
};

export default SearchPopup;
