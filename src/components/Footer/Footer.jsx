import React from "react";

import "./Footer.css";

import FooterItem from "./FooterItem";

import footer from "../../../data/footer.json";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {footer.map((item) => (
          <FooterItem
            key={item.col_number}
            col_number={item.col_number}
            col_values={item.col_values}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
