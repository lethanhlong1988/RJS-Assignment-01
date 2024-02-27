import "./DetailContent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import detail from "../../../data/detail.json";

const DetailContent = () => {
  console.log(detail);
  return (
    <div className="detail_card">
      <div className="detail_infomation">
        <div className="information-title">
          <h1>{detail.name}</h1>
          <p className="adress">
            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            {detail.address}
          </p>
          <p className="blueColor">{detail.distance}</p>
          <p className="greenColor">{detail.price}</p>
        </div>
        <div>
          <button className="blueButton p4-8 text-button">
            Reserve or Book Now!
          </button>
        </div>
      </div>
      <div className="photoscontainer">
        {detail.photos.map((photo) => (
          <div>
            <img src={photo} alt="" />
          </div>
        ))}
      </div>
      <div className="detail_PR">
        <div className="PR flex-co-10">
          <h1>{detail.title}</h1>
          <p>{detail.description}</p>
        </div>
        <div className="prices flex-co-10">
          <h2>Perfect for a 9-night stay!</h2>
          <p>
            Loacated in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </p>
          <p className="p-12">
            <span className="text-bold"> ${detail.nine_night_price}</span>
            (9 nights)
          </p>
          <button className="blueButton p4-8 text-button">
            Reserve or Book Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
