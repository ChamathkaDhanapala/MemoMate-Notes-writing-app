import React from "react";
import "../Navbar/Navbar.css";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate;

    const onLogout=()=>{
        navigate("/login");
    };

    return (
        <div className="navbar-container">
            <h2 className="navbar-title">Notes</h2>

            <ProfileInfo onLogout={onLogout}/>
        </div>
    );
};

export default Navbar;
