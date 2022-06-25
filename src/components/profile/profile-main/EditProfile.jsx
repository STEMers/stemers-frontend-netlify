import React, { useState } from "react";
import { baseUrl, imgUrl, defaultprofilephoto } from "../../../config";
import useFetch from "../../../hooks/useFetch"; // src/hooks/useFetch.js
import { Loading } from "../../loading/Loading";
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { BsFillSkipBackwardCircleFill } from "react-icons/bs";
import { updateProfile } from "../../../hooks/updateProfile";
import axios from "axios";

export const EditProfile = ({ seteditmodetofalse }) => {
  // get ID from url
  const params = useParams();
  const userId = params.id;
   const [files, setFiles] = useState();
   const [imgId, setImgId] = useState("");

  //form values

  const [aboutme, setAboutme] = useState("");
  const [education, setEducation] = useState("");
  const [hobby, setHobby] = useState("");
  const [myjob, setMyjob] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [countryId, setCountryId] = useState("");
  const [sex, setSex] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const profileUrl = `${baseUrl}/users/${userId}?populate=*`;
  const { data, loading } = useFetch(profileUrl);



  // upload image-------------------------

  const uploadImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("files", files[0]);

    axios
      .post(`${baseUrl}/upload`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
        },
      })
      .then((response) => {
        const imageId = response.data[0].id;
        
          const body = {
              avatar:{
                id:imageId
              }
          }
           updateProfile(userprofileURL, body);
        console.log("uploaded image id", imageId);

        axios
          .post(
            `${baseUrl}/users/${userId}?populate=*`,
            { "avatar": {"id":imageId} },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt-token")}`,
              },
            }
          )
          .then((response) => {
            //handle success
          })
          .catch((error) => {
            //handle error
          });
      })
      .catch((error) => {
        //handle error
      });
  };

  //---------------------------------------

  //submit post request

  const userprofileURL = `${baseUrl}/users/${userId}`;

  // Fetch countries

  const countriesUrl = `${baseUrl}/countries`;
  const { data: countriesL, loading: countriesLoading } = useFetch(
    countriesUrl,
    null
  );

  // Fetch categories

  const categoriesUrl = `${baseUrl}/categories`;
  const { data: categoriesL, loading: categoriesLoading } = useFetch(
    categoriesUrl,
    null
  );

  /* prevent reading data before end loading */
  if (countriesLoading || categoriesLoading || loading) return <Loading />;
  console.log("Aboutme from data", aboutme);
  // handle edit form submit
  const handleEdit = (e) => {
    e.preventDefault();
    const body = {
      first_name: firstname,
      last_name: lastname,
      sex: sex,
      job: myjob,
      aboutme: aboutme,
      education: education,
      hobby: hobby,
      country: {
        id: countryId,
      },
      category: {
        id: categoryId,
      },     
    };
    updateProfile(userprofileURL, body);  
  };

  return (
    <div className="profile">
      <div onClick={seteditmodetofalse} className="cancel-edit-profile">
        <Link to="">
          <BsFillSkipBackwardCircleFill />
          Go Back
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
            <div>
              <span>{lastname}</span>
              <span>{firstname}</span>
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
            <div className="change-photo">
             <form onSubmit={uploadImage}>
                <input type="file" onChange={(e) => setFiles(e.target.files)} />
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
          <div className="votes">
            <h3>Nominations and Badges</h3>
            <p>
              Total Nominations:{" "}
              <span>
                {data.nominations_received
                  ? data.nominations_received.length
                  : ""}
              </span>
            </p>
            <p>
              Badge Earned: <span>Badge1</span>
            </p>
          </div>
        </div>
        <div className="profile-right">
          <form id="edit-profile">
            <div className="form-data">
              <label>First Name</label>
              <input
                type="text"
                name="first-name"
                defaultValue={data.first_name}
                onChange={(e) => setFirstname(e.target.value)}
                required
              />
            </div>
            <div className="form-data">
              <label>Last Name</label>
              <input
                type="text"
                name="last-name"
                defaultValue={data.last_name}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="form-data">
              <label>Sex</label>
              <select
                defaultValue={data.sex}
                onChange={(e) => setSex(e.target.value)}
              >
                <option value="">Select sex</option>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="notosay">Prefer not to say</option>
              </select>
            </div>
            <div className="form-data">
              <label>Job</label>
              <input
                type="text"
                name="job"
                defaultValue={data.job}
                onChange={(e) => setMyjob(e.target.value)}
              />
            </div>
            <div className="form-data">
              <label>Country</label>
              <select
                defaultValue={data.country ? data.country.id : ""}
                onChange={(e) => setCountryId(e.target.value)}
              >
                <option value="">Select country</option>
                {countriesL.data.map((country, index) => (
                  <option value={country.id} key={index}>
                    {country.attributes.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-data">
              <label>STEM</label>
              <select
                defaultValue={data.category ? data.category.id : ""}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                <option value="">Select STEM</option>
                {categoriesL.data.map((category, index) => (
                  <option value={category.id} key={index}>
                    {category.attributes.type}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-data">
              <label>About me</label>
              <textarea
                id="aboutme"
                name="aboutme"
                defaultValue={data.aboutme}
                onChange={(e) => setAboutme(e.target.value)}
              />              
            </div>
            <div className="form-data">
              <label>Education</label>
              <textarea
                id="education"
                name="education"
                defaultValue={data.education}
                onChange={(e) => setEducation(e.target.value)}
              />
            </div>
            <div className="form-data">
              <label>Hobbies</label>
              <textarea
                id="hobby"
                name="hobby"
                defaultValue={data.hobby}
                onChange={(e) => setHobby(e.target.value)}
              />
            </div>
            <button className="btn-save-changes" onClick={(e) => handleEdit(e)}>
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
