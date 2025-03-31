import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useActionData } from "react-router-dom";
import "../Login/Login.css"
import PasswordInput from "../../components/Input/PasswordInput"
import { validateEmail } from "../../utils/helper";

const Login = () => {

    const [email, setEmai] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if(!password){
            setError("Please enter the password");
            return;
        }

        setError("")
    };
    return (
        <>
            <Navbar />

            <div className="login-container">
                <div className="login-box">
                    <form onSubmit={handleLogin}>
                        <h4>Login</h4>

                        <input type="text"
                            placeholder="Email"
                            className="input-box"
                            value={email}
                            onChange={(e) => setEmai(e.target.value)} 
                            />

                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            />

                            {error && <p className="err-email">{error}</p>}

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