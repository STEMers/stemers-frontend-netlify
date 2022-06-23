import { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import { baseUrl, imgUrl } from "../../config";
import { useFetch } from "../../hooks";
import User from "./user/User";
import badge1 from "../../images/badge1.png";
import badge2 from "../../images/badge2.png";
import badge3 from "../../images/badge3.png";
import { Loading } from "../loading/Loading";
// import { countries, categories } from "../../json-data/countriesAndCategories"; // for map countries and categories option in filter form section // abandoned！

export default function Stars() {
  const defaultImgUrl = `${imgUrl}/uploads/default_avatar2_076e77e12e.png`; // for users who didn't upload img yet.
  const [submitCount, setSubmitCount] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(null); // store user input
  const [selectedCategory, setSelectedCategory] = useState(null); // store user input
  const defaultUrl = `${baseUrl}/users?populate=*`; // by default display all users/stars
  const filteredUrl = !selectedCategory
    ? `${baseUrl}/users?populate=*&filters[country][name][$containsi]=${selectedCountry}`
    : !selectedCountry
    ? `${baseUrl}/users?populate=*&filters[category][type][$containsi]=${selectedCategory}`
    : `${baseUrl}/users?populate=*&filters[category][type][$containsi]=${selectedCategory}&filters[country][name][$containsi]=${selectedCountry}`; // for filter with country, category
  const starsUrl =
    !selectedCountry && !selectedCategory ? defaultUrl : filteredUrl;

  const countriesUrl = `${baseUrl}/countries`;
   const { data:countriesL, loading: countriesLoading } = useFetch(countriesUrl, null);  
  // if (countriesL) {
  //   console.log("countriesL", countriesL);
  // }

  const categoriesUrl = `${baseUrl}/categories`;
  const { data:categoriesL, loading:categoriesLoading } = useFetch(categoriesUrl, null);  
  // if (categoriesL) {
  //   console.log("categoriesL", categoriesL);
  // }

  const { data, loading } = useFetch(starsUrl, submitCount);
  if (data) {
    console.log("data 1", data);
  }

  /* submit filter form */
  const handleSubmit = (e) => {
    e.preventDefault();

    /* get user input*/
    const country = document.getElementById("country").value;
    setSelectedCountry(country);
    const category = document.getElementById("category").value;
    setSelectedCategory(category);

    /* fire useFetch() */
    setSubmitCount((c) => c + 1);
  };

  /* prevent reading data before end loading */
  if (countriesLoading || categoriesLoading || loading)
    return <Loading />
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
          <div className="country-section">
            <label htmlFor="country"></label>
            <select name="country" id="country" className="country-select">
              <option value="">select country</option>
              {countriesL.data.map((option, index) => (
                <option
                  value={option.attributes.name}
                  key={`country-${index}`}
                >
                  {option.attributes.name}
                </option>
              ))}
            </select>
          </div>
          <div className="category-section">
            <label htmlFor="category"></label>
            <select name="category" id="category" className="category-select">
              <option value="">select category</option>
              {categoriesL.data.map((category, index) => (
                <option
                  value={category.attributes.type}
                  key={`category-${index}`}
                >
                  {category.attributes.type}
                </option>
              ))}
            </select>
          </div>
          <input
            type="submit"
            value="Submit"
            className="stars-form-submit"
            onClick={handleSubmit}
          ></input>
        </form>
      </div>
      <div className="stars--stars-container">
        {data.map((user, index) => (
          <Link to={`/profile/${user.id}`} key={`${user}-${index}`}>
            <User
              srcAvatar={
                user.avatar ? `${imgUrl}${user.avatar.url}` : defaultImgUrl
              }
              userId={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              countrySN={user.country.shortName}
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
