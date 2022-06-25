import countryFlagEmoji from "country-flag-emoji"; 
import "./styles.css";

export default function User({
  srcAvatar,
  userId,
  firstName,
  lastName,
  countrySN,
  nominationsR,
  badge1,
  badge2,
  badge3,
  job,
}) {
  return (
    <div className="user card">
      <img src={srcAvatar} alt="user face" className="user-avatar" />
      <img
        src={
          nominationsR.length >=20
            ? badge1
            : nominationsR.length > 15 && nominationsR.length <= 20
            ? badge2
            : badge3
        }
        className="user-badge"
        alt="badge"
      />
      <div className="user-short-info">
        <p className="user-job">{job?job:"untold"}</p>
        <p className="user-name" id={userId}>
          {`${firstName} ${lastName}`}
        </p>
        <span className="user-country-sn">{countrySN}</span>
        <span className="user-flag">{countrySN?countryFlagEmoji.get(countrySN).emoji:""}</span>
      </div>
    </div>
  );
}
