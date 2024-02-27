import React from "react";

import "./FooterItem.css";

const FooterItem = (props) => {
  return (
    <div className="footer-item footer-text">
      {props.col_values.map((val, i) => (
        <div key={i}>{val}</div>
      ))}
    </div>
  );
};

export default FooterItem;
