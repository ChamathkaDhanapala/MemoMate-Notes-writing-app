import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "../Login/Login.css"
import PasswordInput from "../../components/Input/PasswordInput"

const Login = () => {
    return(
        <>
        <Navbar/>

        <div className="login-container"> 
            <div className="login-box">
                <form onSubmit={()=>{}}>
                    <h4>Login</h4>
                    <input type="text" placeholder="Email" className="input-box"/>
                    <PasswordInput/>
                    <button type="submit" className="btn-primary">Login</button>
                    <p>Not Registered yet?{""}
                        <Link to="/signup">Create an Account</Link>
                    </p>
                </form>
            </div>
        </div>
        </>
    )
    
};
export default Login