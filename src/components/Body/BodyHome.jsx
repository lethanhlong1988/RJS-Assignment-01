import react from "react";
import CityList from "./CityList";
import HotelList from "./HotelList";
import HotelTypes from "./HotelTypes";

import "./BodyHome.css";

const BodyHome = () => {
  return (
    <div className="bodyHome_controls container-concept">
      <div className="bodyItem">
        <CityList />
      </div>
      <div className="bodyItem">
        <HotelTypes />
      </div>
      <div className="bodyItem">
        <HotelList />
      </div>
    </div>
  );
};

export default BodyHome;
