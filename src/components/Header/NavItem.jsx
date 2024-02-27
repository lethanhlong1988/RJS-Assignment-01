import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./NavItem.css";

const NavItem = (prop) => {
  return (
    <div className={prop.active ? "active" : ""}>
      <div className="navitem">
        <FontAwesomeIcon icon={prop.icon} />
        <p>{prop.type}</p>
      </div>
    </div>
  );
};

export default NavItem;
