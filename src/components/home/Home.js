import "./styles.css";
import { Star } from "./featured-star/Star";
import { Intro } from "./intro/Intro";
import { StarImage } from "./star-images/StarImage";

export default function Home() {
  return (
    <div className="home">
      <div className="featured-stars">
        <Star />
      </div>
      <div className="star-images">
         <StarImage />
         <StarImage />
         <StarImage />
      </div>
      <Intro />
    </div>
  );
}
