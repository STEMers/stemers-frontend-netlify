import React from "react";
import { stars } from "../../../json-data/home/Stars";
import "./styles.css";
import countryFlagEmoji from "country-flag-emoji"; //more info here https://www.npmjs.com/package/country-flag-emoji

export const Star = () => {
  return stars.map((star) => (
    <div className="star">
      <img src={star.photo} alt={star.name} className="star-photo" />   
      <img src={star.badge} className="star-badge" alt="badge"/>   
      <div className="star-info">        
        <div className="star-job">{star.job}</div>
        <h2 className="star-name">{star.name}</h2><span className="start-country>">
          {countryFlagEmoji.get(star.country).emoji}
        </span>        
        <div className="star-category">{star.category}</div>
      </div>
    </div>
  ));
};
