import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { developers } from "../../../json-data/about/developers";
import "./styles.css";


export const Developer = () => {
  return developers.map((developer)=>(
    <div className="developer">
      <img src={developer.photo} alt="developer" />
      <h3>{developer.name}</h3>
      <h5>{developer.job}</h5>
      <p>
       {developer.bio}
      </p>
      <div className="social">
        <Link to={developer.github}><BsGithub /></Link>
        <Link to={developer.linkedin}><BsLinkedin/></Link>
      </div>
      <hr />
    </div>
  ));
};
