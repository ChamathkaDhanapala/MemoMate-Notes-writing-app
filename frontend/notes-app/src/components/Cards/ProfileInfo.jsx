import React from "react";
import "../Cards/ProfileInfo.css";
import {getInitials} from "../../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="profile-container">
      <div className="profile-name">
        {getInitials("John Willam")}
        </div>
      
      <div className="profile-details">
        <p className="profile-username">John Willam</p>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
