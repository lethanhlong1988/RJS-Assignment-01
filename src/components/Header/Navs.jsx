import React from "react";

import "./Navs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import navListItem from "../../../data/navBar.json";
import navListItem from "../../data/navBar.json";

import NavItem from "./NavItem";

const Navs = () => {
  return (
    <div className="navs">
      {navListItem.map((item) => (
        <NavItem
          key={item.type}
          active={item.active ? "active" : ""}
          icon={item.icon}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default Navs;
