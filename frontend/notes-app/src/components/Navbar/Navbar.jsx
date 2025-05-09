import React from "react";
import "../Navbar/Navbar.css";
import ProfileInfo from "../Cards/ProfileInfo";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <h2 className="navbar-title">Notes</h2>

            <ProfileInfo/>
        </div>
    );
};

export default Navbar;
