import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput"
import { validateEmail } from "../../utils/helper";
import "../SignUp/SignUp.css";

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Navbar />
            <div>
                <div>
                    <form onSubmit={handleSignUp}>
                        <h4>SignUp</h4>

                        <input type="text"
                            placeholder="Name"
                            className="input-box"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

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

                        <button type="submit" className="btn-primary">SignUp</button>
                        <p>Already have an account?{""}
                            <Link to="/login">Login</Link>
                        </p>

                    </form>
                </div>
            </div>
        </>
    );
};
export default SignUp