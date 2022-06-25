import { Link, useNavigate, useParams } from "react-router-dom";
import countryFlagEmoji from "country-flag-emoji";
import "./styles.css";
import { baseUrl, imgUrl, defaultprofilephoto } from "../../../config";
import useFetch from "../../../hooks/useFetch"; // src/hooks/useFetch.js
import { Loading } from "../../loading/Loading";
import { voteStar } from "../../../hooks/voteStar";
import { FiEdit3 } from "react-icons/fi";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import swal from "sweetalert";
import { useEffect, useState } from "react";

export default function ProfileMain({
  seteditmodetotrue,
  togglePhotoEdit,
  editphoto,
}) {
  // get ID from url
  const params = useParams();
  const userId = params.id;
  const navigate = useNavigate();
  const loggedInUser = localStorage.getItem("user-id");
  const profileUrl = `${baseUrl}/users/${userId}?populate=*`;
  const { data, loading } = useFetch(profileUrl);

  /* prevent reading data before data loading finishes*/
  if (loading) return <Loading />;

  //handle user vote
  const handleVote = (e) => {
    if (!loggedInUser) {
      navigate("/login");
      swal("Login required !", "Please login to vote !", "info");
      return;
    }
    if (data.nominations_received) {
      for (let index = 0; index < data.nominations_received.length; index++) {
        if (data.nominations_received[index].voter_id === loggedInUser) {
          console.log("you have already nominated her!",index);
           swal("oops !", `you have already nominated her before`, "info");  
           return                         
        }       
      } 
      
    }
      const url = `${baseUrl}/nominations`;
      const candidate = userId;
      voteStar(url, loggedInUser, candidate);
      swal("Thank you for voting !", "You have voted your star", "success");
      navigate("/stars");
      console.log(`${localStorage.getItem("user-id")} voted ${userId}`);
    
  };

  const isprofileowner = userId === loggedInUser;

  return (
    <div className="profile">
      {isprofileowner ? (
        <div onClick={seteditmodetotrue} className="edit-profile">
          <Link to="">
            edit profile ...
            <FiEdit3 />
          </Link>
        </div>
      ) : (
        ""
      )}
      <div className="profile-container">
        <div className="profile-left">
          <div className="photo">
            <img
              src={
                data.avatar
                  ? `${imgUrl}${data.avatar.url}`
                  : defaultprofilephoto
              }
              alt="profile pic"
            />
            {isprofileowner ? (
              <Link to="#">
                <p onClick={() => togglePhotoEdit()}>
                  ...
                  <FiEdit3 />
                </p>
              </Link>
            ) : (
              ""
            )}
          </div>
          {isprofileowner && editphoto ? (
            <div className="change-photo">
              <form>
                <input type="file" name="profilephoto" />
                <input type="submit" value="Save photo" />
              </form>
            </div>
          ) : (
            ""
          )}
          <br></br>
          <div className="my-details">
            <div className="star-name-profile">
              <span>{data.last_name}</span> <span>{data.first_name}</span><span>{data.country?countryFlagEmoji.get(data.country.shortName).emoji:""}</span>
            </div>
            <div className="star-job-profile"><h3>{data.job}</h3></div>
            <div className="my-details">
              <span><h5>{data.category ? data.category.type : ""}</h5></span>
            </div>
          </div>
          <div className="social-media">
            <ul>
              <li>
                <BsFacebook />
              </li>
              <li>
                <BsInstagram />
              </li>
              <li>
                <BsGithub />
              </li>
              <li>
                <BsLinkedin />
              </li>
            </ul>
          </div>
          <hr/>
          <div className="votes">
            <h3>Nominations and Badges</h3>
            <p>
              Nominations Received:{" "}
              <span className="votes-received">
                {data.nominations_received?data.nominations_received.length:""}
              </span>
            </p>
            <p>
              Nominations Given: {" "}
              <span className="votes-given">
                {data.nominations_given?data.nominations_given.length:""}
              </span>
            </p>
            <p>
              Badge Earned: <span>Badge1</span>
            </p>
          </div>
          <hr></hr>
          <div className="details-container">
            <div className="my-details">
              <label>Sex</label>
              <span> : {data.sex}</span>
            </div>
            <div className="my-details">
              <label htmlFor="email">Email</label>
              <span> : {data.email}</span>
            </div>           
          </div>
        </div>
        <div className="profile-right">
          <div className="my-details">
            <h3>About me</h3>
            <div className="about-me">
              {data.aboutme}
            </div>
          </div>
          <div className="my-details">
            <h3>Education</h3>
            <div className="education">
              {data.education}             
            </div>
          </div>
          <div className="my-details">
            <h3 className="hobbies">Hobbies</h3>
            <div>
              {data.hobby}
            </div>
          </div>
        </div>
      </div>
      {isprofileowner ? (
        ""
      ) : (
        <div className="nominate">
          <button onClick={(e) => handleVote(e)}>Nominate </button>
        </div>
      )}
    </div>
  );
}