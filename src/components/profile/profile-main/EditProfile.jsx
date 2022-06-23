import React from "react";
import { baseUrl, imgUrl, defaultprofilephoto } from "../../../config";
import useFetch from "../../../hooks/useFetch"; // src/hooks/useFetch.js
import { Loading } from "../../loading/Loading";
import { voteStar } from "../../../hooks/voteStar";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { FiEdit3 } from "react-icons/fi";

export const EditProfile = ({ seteditmodetofalse }) => {
  // get ID from url
  const params = useParams();
  const userId = params.id;
  const profileUrl = `${baseUrl}/users/${userId}?populate=*`;
  const { data, loading } = useFetch(profileUrl);

  /* prevent reading data before end loading */
  if (loading) return <Loading />;
  console.log(data.first_name);
  // const handleVote = (e) => {
  //   e.preventDefault();
  //   const url = `${baseUrl}/nominations`;
  //   const voter = localStorage.getItem("user-id");
  //   const candidate = userId;
  //   voteStar(url, voter, candidate);
  //   console.log(`${localStorage.getItem("user-id")} voted ${userId}`);
  // };
  return (
    <div className="profile">
       <div onClick={seteditmodetofalse} className="cancel-edit-profile">
          <Link to="">
            cancel editing ...
            <FiEdit3 />
          </Link>
      </div>
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
            <div className="change-photo">
              <form>
                <input type="file" name="profilephoto" />
                <input type="submit" value="Save photo" />
              </form>
            </div>
          </div>
          <div className="votes">
            <h3>Nominations and Badges</h3>
            <p>
              Total Nominations: <span>34</span>
            </p>
            <p>
              Badge Earned: <span>Badge1</span>
            </p>
          </div>
        </div>
        <div className="profile-right">
          <form>
            <div className="form-data">
              <lable>First Name</lable>
              <input
                type="text"
                name="first-name"
                defaultValue={data.first_name}
              />
            </div>
            <div className="form-data">
              <lable>Last Name</lable>
              <input
                type="text"
                name="last-name"
                defaultValue={data.last_name}
              />
            </div>
            <div className="form-data">
              <lable>Phone</lable>
              <input type="number" name="phone" />
            </div>
             <div className="form-data">
              <lable>Sex</lable>
              <input type="text" name="sex" />
            </div>
             <div className="form-data">
              <lable>DoB</lable>
              <input type="datetime" name="dob" />
            </div>
            <div className="form-data">
              <lable>Country</lable>
              <input type="text" name="country" />
            </div>
            <div className="form-data">
              <lable>STEMer</lable>
              <input
                type="text"
                name="category"
                defaultValue={data.category.type}
              />
            </div>

            <div className="form-data">
              <label>About me</label>
              <textarea>about me</textarea>
            </div>
            <div className="form-data">
              <label>Education</label>
              <textarea>my education</textarea>
            </div>
            <div className="form-data">
              <label>Hobbies</label>
              <textarea>My hobbies</textarea>
            </div>
            <button >Save changes</button>
          </form>
        </div>
      </div>
    </div>
  );
};
