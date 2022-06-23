import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Invite = () => {
  const navigate=useNavigate();
const handleInvitation = (e)=>{
  if(!e.target.form.email.value){
    e.preventDefault();
    alert("Please insert email to continue.")
    return;
  }
  alert("Thank you for inviting. We hope the star that you invited will join us soon.");
  navigate("/stars");
}
  return (
    <div className="invite">
      <div className="invite-container">
        <h2>Invite a star to join our community </h2>
        <h4>Let show off her achievements and get the exposure she deserves</h4>
        <form>
          <input type="email" name="email" id="email"/>
          <button onClick={(e)=>handleInvitation(e)}>Send Invitation</button>
        </form>        
       <div className="social-share">
        <h4>Share it and let other stars know about STEMers</h4>
        <div class="sharethis-inline-share-buttons"></div>
       </div>
      </div>
    </div>
  );
};