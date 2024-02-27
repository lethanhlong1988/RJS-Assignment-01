import react from "react";

import "./HotelTypes.css";

import TypeList from "../../../data/type.json";
import TypeItem from "./TypeItem";

const HotelTypes = () => {
  return (
    <div className="types-concept">
      <h2>Browse by property type</h2>
      <ul className="type-list">
        {TypeList.map((type) => (
          <TypeItem
            key={type.name}
            name={type.name}
            count={type.count}
            image={type.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default HotelTypes;
