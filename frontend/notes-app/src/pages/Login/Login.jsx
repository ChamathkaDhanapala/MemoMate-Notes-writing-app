import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useActionData } from "react-router-dom";
import "../Login/Login.css"
import PasswordInput from "../../components/Input/PasswordInput"

const Login = () => {

    const [email,setEmai] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null);

    const handleLogin = async(e)=>{
        e.preventDefault();
    };
    return(
        <>
        <Navbar/>

        <div className="login-container"> 
            <div className="login-box">
                <form onSubmit={handleLogin}>
                    <h4>Login</h4>
                    <input type="text" placeholder="Email" className="input-box"
                    value={email} 
                    onChange={(e)=>setEmai(e.target.value)}/>

                    <PasswordInput value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
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