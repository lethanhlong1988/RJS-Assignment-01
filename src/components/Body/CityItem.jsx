import react from "react";

import "./CityItem.css";

const CityItem = (props) => {
  return (
    <div className="city-card" style={{ backgroundImage: `url(${props.image})` }}>
      <div className="card-content">
        <h1>{props.name}</h1>
        <p>{props.subText}</p>
      </div>
    </div>
  );
};

export default CityItem;
