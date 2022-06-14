import { useParams } from "react-router-dom";

import "./styles.css";
import { baseUrl, imgUrl } from "../../../config";
// import useFetchUser from "../../hooks/useFetchUser";
import useFetch from "../../../hooks/useFetch";  // src/hooks/useFetch.js

export default function ProfileMain() {
  // get ID from url
  const params = useParams();
  const userId = params.id;
  const profileUrl = `${baseUrl}/users/${userId}?populate=*`;
  const defaultImgUrl = `${imgUrl}/uploads/default_avatar2_076e77e12e.png`; // for users who didn't upload img yet.

  // const { data, loading } = useFetchUser(profileUrl);
  const { data, loading } = useFetch(profileUrl);

  /* prevent reading data before end loading */
  if (loading) return <div className="loading">Loading...</div>;
  return (
    <div className="profile-main">
      <div className="profile-infos">
        <div className="infos-left">
          <div className="image-container">
            <img
              src={data.avatar?`${imgUrl}${data.avatar.url}`:defaultImgUrl}
              alt="user face"
              className="profile-img"
            />
          </div>
          <div className="short-infos-container">
            <div className="age short-info">
              <p className="profile-left-list">Age:</p>
              <p className="s-info-property">{data.age}</p>
            </div>
            <div className="location short-info">
              <p className="profile-left-list">Location:</p>
              <p className="s-info-property">{data.location}</p>
            </div>
            <div className="eduction short-info">
              <p className="profile-left-list">Education:</p>
              <p className="profile-eduction">{data.education}</p>
            </div>
            <div className="job short-info">
              <p className="profile-left-list">Job:</p>
              <p className="profile-job">{data.job}</p>
            </div>
            <div className="family short-info">
              <p className="profile-left-list">Family:</p>
              <p className="profile-family">{data.family}</p>
            </div>
          </div>
        </div>
        <div className="infos-right">
          <h2 className="profile-name">
            {data.firstname} {data.lastname}
          </h2>
          <p className="profile-quote">{data.quote}</p>
          <div className="bio-container">
            <p className="profile-right-list">BIO</p>
            <p className="profile-bio">{data.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
