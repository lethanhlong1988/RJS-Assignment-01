import react from "react";

import "./HotelList.css";
import HotelItem from "./HotelItem";

import Hotels from "../../../data/hotel_list.json";

const HotelList = () => {
  return (
    <div className="types-concept">
      <h2>Homes guests love</h2>
      <ul className="type-list">
        {Hotels.map((hotel) => (
          <HotelItem
            key={hotel.name}
            name={hotel.name}
            city={hotel.city}
            price={hotel.price}
            rate={hotel.rate}
            type={hotel.type}
            image_url={hotel.image_url}
          />
        ))}
      </ul>
    </div>
  );
};

export default HotelList;
