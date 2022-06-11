import { useParams } from "react-router-dom";

import "./styles.css";
import { baseUrl } from "../../../config";

export default function ProfileMain() {
  // 👇️ get ID from url
  const params = useParams();
  const userId= params.id;
  const profileUrl = `${baseUrl}/users/${userId}?populate=*`;

  return <div className="profile-main">Template Profile Main</div>;
}
