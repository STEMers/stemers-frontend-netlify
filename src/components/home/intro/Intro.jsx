import React from "react";
import "./styles.css";
import { Button } from "./button/Button";
import { Link } from "react-router-dom";

export const Intro = () => {
  return (
    <div className="intro">
      <h2 className="intro-title">Nominate A <span>STEMer</span></h2>
      <div className="intro-content">
       This program offers an opportunity to showcase women in <span>STEM</span> work, reach more people, shape their future.
      </div>
      <div className="nominate-star">
          <Link to="/stars"><Button name="nominate" cls="btn-nominate"/></Link>
          <Link to="/"><Button name="invite" cls="btn-invite" /></Link>
      </div>
    </div>
  );
};
