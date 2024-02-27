import "./SearchItem.css";

const SearchItem = (props) => {
  return (
    <div className="ItemCard">
      <div className="ItemContent">
        <div>
          <img src={props.image_url} alt="" />
        </div>
        <div className="ItemDetail_01">
          <h1>{props.name}</h1>
          <p>{props.distance} m</p>
          <p className="itemTag">{props.tag}</p>
          <p className="itemDescription">{props.description}</p>
          <p className="">{props.type}</p>
          <p>
            {props.free_cancel ? (
              <div className="itemcancel">
                <div>Free cancellation</div>
                <div>
                  You can cancel later, so look in this great price today!
                </div>
              </div>
            ) : null}
          </p>
        </div>
        <div className="ItemDetail_02">
          <div className="rate">
            <p>{props.rate_text}</p> <span>{props.rate}</span>
          </div>
          <div className="priceDetail">
            <p className="price">${props.price}</p>
            <p className="p">Includes taxes and fees</p>
            <button className="blueButton">See availabitity</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
