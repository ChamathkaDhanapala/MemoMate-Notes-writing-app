import React from "react";

const ProfileInfo = ({onLogout}) => {
    return(
      <div className="">
        <div className="">TU</div> 
        <div>
        <p className="text-sm font-medium">Willam</p>
        <button className="" onClick={onLogout}>
            Logout
            </button>
        </div>  
      </div>
      
    );
};
export default ProfileInfo;