import "./styles.css";
import ProfileMain from "./profile-main/ProfileMain";
import { useState } from "react";
import { EditProfile } from "./profile-main/EditProfile";

export default function Profile() {
  const [editmode, setEditmode] = useState(false);
  const [editphoto, setEditPhoto]=useState(false);

  const seteditmodetofalse = () => {
    setEditmode(false);
  };

  const seteditmodetotrue = () => {
    setEditmode(true);
  };

  const togglePhotoEdit = ()=>{
    setEditPhoto(!editphoto);
  }

  return (
    <div className="profile">
      {editmode ? (
        <EditProfile seteditmodetofalse={seteditmodetofalse}/>
      ) : (
        <ProfileMain seteditmodetotrue={seteditmodetotrue} togglePhotoEdit={togglePhotoEdit} editphoto={editphoto}/>
      )}
    </div>
  );
}
