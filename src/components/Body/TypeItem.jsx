import react from "react";

import "./TypeItem.css";

const TypeItem = (props) => {
  return (
    <div className="type-item">
      <div
        className="type-card"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="type-item-content">
        <h1>{props.name}</h1>
        <p>{props.count} hotels</p>
      </div>
    </div>
  );
};

export default TypeItem;
