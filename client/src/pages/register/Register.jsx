import "./register.css";
import { NavLink } from "react-router-dom";
import React,{ useRef, useContext } from "react";
import  axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { loginCalls } from "../../apiCalls";

export default function Register() {

    const nameRef = useRef();
    const DPRef = useRef();
    const emailRef = useRef();
    const pwdRef = useRef();

    const {dispatch} = useContext(AuthContext);

    const handleClick = async (e)=>{
        e.preventDefault();
        const name = nameRef.current.value;
        const DP = DPRef.current.value;
        const email = emailRef.current.value;
        const pwd = pwdRef.current.value;

        try {
            await axios.post(
                "http://localhost:8000/user/Registration",
                // "http://localhost:4000/user/Registration",
                {
                    firstName : name,     
                    lastName : "",     
                    email : email,    
                    profilePicture : DP, 
                    password : pwd
                }
            ).then((res)=>{
                console.log(res);
                loginCalls(
                    {
                        email:email,
                        password:pwd
                    },
                    dispatch
                );
            });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Fakebook</h3>
                    <span className="loginDesc">We're fake bro. Go back.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            placeholder="Name" 
                            className="loginInput" 
                            required
                            ref={nameRef}
                        />
                        <input 
                            placeholder="DP Link" 
                            className="loginInput"
                            required
                            ref={DPRef}
                        />
                        <input 
                            placeholder="Email" 
                            className="loginInput"
                            required
                            ref={emailRef}
                        />
                        <input 
                            placeholder="Password" 
                            className="loginInput"
                            type="password"
                            required
                            ref={pwdRef}
                        />
                        <button type="submit" className="loginButton">Sign Up</button>
                        <NavLink className="registerLink" to="/login">
                            <button className="registerLink">Already Have an Account? Login.</button>
                        </NavLink>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}
