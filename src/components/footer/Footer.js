import "./styles.css";
import React from "react";
import { FaFacebookSquare, FaPhoneAlt } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
return (
    <div className="footer">
    
    <div className="social-icons">
    <a href="0471 65 34 02"><FaPhoneAlt style={{ color: "white", fontSize: "30px" }}  /></a> <a href="example.com"><FaFacebookSquare style={{ color: "white", fontSize: "30px" }} /></a> <a href="example.com"> <BsInstagram style={{ color: "white", fontSize: "30px" }} /></a>
    </div>
    </div>
);
};

export default Footer;
