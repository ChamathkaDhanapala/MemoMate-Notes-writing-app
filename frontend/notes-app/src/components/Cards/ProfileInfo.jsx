import React from "react";
import "../Cards/ProfileInfo.css";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="profile-container">
      <div className="profile-name">John Willam</div>
      <div className="profile-details">
        <p className="profile-username">Willam</p>
        <button className="logout-button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileInfo;
