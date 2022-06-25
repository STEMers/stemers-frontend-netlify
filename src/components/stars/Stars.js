import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../home/intro/button/Button";
import "./styles.css";
import { baseUrl, imgUrl,defaultprofilephoto } from "../../config";
import { useFetch } from "../../hooks";
import User from "./user/User";
import badge1 from "../../images/badge1.png";
import badge2 from "../../images/badge2.png";
import badge3 from "../../images/badge3.png";
import { Loading } from "../loading/Loading";
import { FaSearch} from "react-icons/fa";

export default function Stars() {
  // const defaultImgUrl = `${imgUrl}/uploads/default_avatar2_076e77e12e.png`; // for users who didn't upload img yet.
  const [submitCount, setSubmitCount] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(null); // store user input
  const [selectedCategory, setSelectedCategory] = useState(null); // store user input
  const defaultUrl = `${baseUrl}/users?populate=*`; // by default display all users/stars

  // Filter list of star based on country and category selected by user
  let filteredUrl = [];
  if (selectedCategory && !selectedCountry) {
    filteredUrl = `${baseUrl}/users?populate=*&filters[category][id][$eq]=${selectedCategory}`;
  } else if (!selectedCategory && !selectedCountry) {
    filteredUrl = defaultUrl;
  } else if (!selectedCategory && selectedCountry) {
    filteredUrl = `${baseUrl}/users?populate=*&filters[country][id][$eq]=${selectedCountry}`;
  } else {
    filteredUrl = `${baseUrl}/users?populate=*&filters[category][id][$eq]=${selectedCategory}&filters[country][id][$eq]=${selectedCountry}`;
  }
  const starsUrl = `${filteredUrl}&filters[users][sex][$eq]="Female"`;

  const countriesUrl = `${baseUrl}/countries`;
  const { data: countriesL, loading: countriesLoading } = useFetch(
    countriesUrl,
    null
  );

  const categoriesUrl = `${baseUrl}/categories`;
  const { data: categoriesL, loading: categoriesLoading } = useFetch(
    categoriesUrl,
    null
  );

  // Fetch data from remote backend
  const { data, loading } = useFetch(starsUrl, submitCount);

  /* submit filter form */
  const handleSubmit = (e) => {
    e.preventDefault();

    /* get user input*/
    const country = document.getElementById("country").value;

    console.log("Selected country", country);
    setSelectedCountry(country);
    const category = document.getElementById("category").value;
    setSelectedCategory(category);

    /* fire useFetch() */
    setSubmitCount((c) => c + 1);
  };

  /* prevent reading data before fetching finishes */
  if (countriesLoading || categoriesLoading || loading) return <Loading />;
  return (
    <div className="stars-page">
      <div className=" stars--title-section">
        <h1 className="stars--title">
          Meet The <span className="highlight-stars">STARS</span>
        </h1>
      </div>
      <div className="stars--filter-section">
        <form
          name="stars-form"
          id="stars-form"
          className="stars-form"
          onSubmit={handleSubmit}
        >
          <div className="filter-stars">
            <select
              name="country"
              id="country"
              className="select-country"
              defaultValue={selectedCountry}
            >
              <option value="" key="0">
                Select Country
              </option>
              {countriesL.data.map((country, index) => (
                <option value={country.id} key={index}>
                  {country.attributes.name}
                </option>
              ))}
            </select>
            <select
              name="category"
              className="select-category"
              id="category"
              defaultValue={selectedCategory}
            >
              <option value="" key="0">
                Select category
              </option>
              {categoriesL.data.map((category, index) => (
                <option value={category.id} key={index}>
                  {category.attributes.type}
                </option>
              ))}
            </select>
            <Button
              cls="btn-submit"
              name={<FaSearch />}
              onClick={(e) => handleSubmit()}
            />
          </div>
        </form>
      </div>
      <div className="stars--stars-container">
        {data.map((user, index) => (
          <Link to={`/profile/${user.id}`} key={`${user}-${index}`}>
            <User
              srcAvatar={
                user.avatar ? `${imgUrl}${user.avatar.url}` : defaultprofilephoto
              }
              userId={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              countrySN={user.country ? user.country.shortName : null}
              nominationsR={user.nominations_received}
              badge1={badge1}
              badge2={badge2}
              badge3={badge3}
              job={user.job}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
