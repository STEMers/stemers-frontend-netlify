// import { stars } from "../../../json-data/home/Stars";
import "./styles.css";
import countryFlagEmoji from "country-flag-emoji"; //more info here https://www.npmjs.com/package/country-flag-emoji
import { useFetch } from "../../../hooks";
import { imgUrl ,baseUrl, defaultprofilephoto} from "../../../config";
import { Link } from "react-router-dom";
import badge1 from "../../../images/badge1.png";
import badge2 from "../../../images/badge2.png";
import {Loading} from "../../loading/Loading"

export const Star = () => {
const url = `${baseUrl}/users?populate=*`;
const defaultImgUrl = `${imgUrl}/uploads/default_c53e4fba66.jpg`;
const {data, loading} = useFetch(url);

console.log("star data",data);

if(loading) return <Loading />
  return data.map((star) => (
    <div className="star" key={star.username}>
      <Link to={`profile/${star.id}`}>
      <img src={star.avatar?`${imgUrl}${star.avatar.url}`:defaultprofilephoto} alt="something" className="star-photo" />   
      <img src={star.nominations_received.length?badge1:badge2}   className="star-badge" alt="badge"/>   
      <div className="star-info">        
        <div className="star-job">{star.job}</div>
        <h2 className="star-name">{star.username}</h2><span className="start-country>">
          {star.country?countryFlagEmoji.get(star.country.shortName).emoji:""}
        </span>        
        <div className="star-category">{star.category?star.category.type:""}</div>
      </div>
      </Link>
    </div>
  ));
};