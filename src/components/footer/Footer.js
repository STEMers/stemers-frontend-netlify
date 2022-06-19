import "./styles.css";
import React from "react";
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IconContext } from "react-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-icons">
        <IconContext.Provider value={{ color: "white", fontSize: "30px" }}>
          <a href="1-800-12345">
            <FaPhoneAlt />
          </a>
          <a href="www.faceboonk.ch">
            <FaFacebookSquare />
          </a>
          <a href="www.inggagram.ch">
            <BsInstagram />
          </a>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Footer;
