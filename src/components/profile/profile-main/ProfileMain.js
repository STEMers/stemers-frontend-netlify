import { useParams } from "react-router-dom";

import "./styles.css";
import { baseUrl, imgUrl } from "../../../config";
import useFetchUser from "../../hooks/useFetchUser";

export default function ProfileMain() {
  // get ID from url
  const params = useParams();
  const userId = params.id;
  const profileUrl = `${baseUrl}/users/${userId}?populate=*`;

  const { data, loading } = useFetchUser(profileUrl);

  /* prevent reading data before end loading */
  if (loading) return <div className="loading">Loading...</div>;
  return (
    <div className="profile-main">
      <div className="profile-infos">
        <div className="infos-left">
          <div className="image-container">
            <img
              src={`${imgUrl}${data.avatar.url}`}
              alt="user face"
              className="profile-img"
            />
          </div>
          <div className="infos-short">
            <p className="profile-age">{data.age}</p>
            <p className="profile-location">{data.location}</p>
            <p className="profile-eduction">{data.education}</p>
            <p className="profile-job">{data.job}</p>
            <p className="profile-family">{data.family}</p>
          </div>
        </div>
        <div className="infos-right">
        <h3 className="profile-name">{data.firstname} {data.lastname}</h3>
        <p className="profile-quote">{data.quote}</p>
        <p className="profile-bio">{data.bio}</p>
        </div>
      </div>
    </div>
  );
}
