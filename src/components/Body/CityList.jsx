import react from "react";

import CityItem from "./CityItem";

// import cityList from "../../../data/city.json";
import cityList from "../../data/city.json";

import "./CityList.css";

const CityList = () => {
  return (
    <ul className="citys-list">
      {cityList.map((city) => (
        <CityItem
          key={city.name}
          name={city.name}
          image={city.image}
          subText={city.subText}
        />
      ))}
    </ul>
  );
};

export default CityList;
