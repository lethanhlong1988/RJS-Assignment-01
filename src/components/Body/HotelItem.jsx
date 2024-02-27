import react from "react";
import { Link } from "react-router-dom";
import "./HotelItem.css";

const HotelItem = (props) => {
  return (
    <div className="type-item">
      <div
        className="hotel-image"
        style={{ backgroundImage: `url(${props.image_url})` }}
      ></div>
      <div className="hotel-item-content">
        <Link className="link-style" to="/detail">
          {props.name}
        </Link>
        <p className="location">{props.city}</p>
        <p className="price">Starting from ${props.price}</p>
        <p className="rate">
          <span>{props.rate}</span> {props.type}
        </p>
      </div>
    </div>
  );
};

export default HotelItem;
