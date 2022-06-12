import countryFlagEmoji from "country-flag-emoji";  // module issue

import "./styles.css";

export default function User({
  srcAvatar,
  userId,
  firstName,
  lastName,
  country,
  countrySN,
  nominationsR,
  badge1,
  badge2,
  badge3,
  emoji
}) {
  return (
    <div className="user card">
      <img src={srcAvatar} alt="user face" className="user-avatar" />
      <img
        src={
          nominationsR.length === 1
            ? badge1
            : nominationsR.length > 1 && nominationsR.length <= 3
            ? badge2
            : badge3
        }
        className="user-badge"
        alt="badge"
      />
      <div className="user-short-info">
        <p className="user-name" id={userId}>
          {`${firstName} ${lastName}`}
        </p>
        <span className="user-country-sn">{countrySN}</span>
        <span className="user-flag">{emoji}</span>
        {/* <span className="user-flag">{countryFlagEmoji.get(country).emoji}</span> */}
      </div>
      
    </div>
  );
}
