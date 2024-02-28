import react from "react";

import SearchItem from "./SearchItem";

// import searchList from "../../../data/search.json";
import searchList from "../../data/search.json";

import "./SearchList.css";

const SearchList = () => {
  console.log(searchList);
  return (
    <div className="SearchList_container">
      <div className="SearchList_contents">
        {searchList.map((item) => (
          <div className="SearchItems">
            <SearchItem
              key={item.name}
              name={item.name}
              distance={item.distance}
              tag={item.tag}
              type={item.type}
              description={item.description}
              free_cancel={item.free_cancel}
              price={item.price}
              rate={item.rate}
              rate_text={item.rate_text}
              image_url={item.image_url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchList;
