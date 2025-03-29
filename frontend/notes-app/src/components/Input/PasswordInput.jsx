import React, { useState } from "react";
import { FaEye ,FaEyeSlash} from "react-icons/fa";
import "../../pages/Login/Login.css";

const PasswordInput = ({value, onChange, placeholder}) => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const toggleShowPassword = () =>{
        setIsShowPassword (!isShowPassword);
    };
    return(
        <div className="password-container">
            <input  
            value={value} 
            onChange={onChange} 
            type={isShowPassword ? "text" : "password"} 
            placeholder={placeholder || "Password" } 
            className="ps-input-box" />

<span className="password-toggle" onClick={toggleShowPassword}>
            {isShowPassword ?<FaEye 
            size={22}
            className="cursor-point"
            onClick={()=>toggleShowPassword()}
            /> : <FaEyeSlash
            size={22}
            className="cursor-pointerr"
            onClick={()=>toggleShowPassword()}
            />}
            </span>

        </div>
    );
};
export default PasswordInput