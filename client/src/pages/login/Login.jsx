import "./login.css";
import {useRef, useContext} from "react";
import {loginCalls} from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
    
    const emailRef = useRef();
    const passwordRef = useRef();
    
    const {dispatch} = useContext(AuthContext);

    const handleClick = (e)=>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password =passwordRef.current.value;
        loginCalls({email:email,password:password},dispatch);
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
                            placeholder="Email"
                            required 
                            className="loginInput" 
                            ref={emailRef}
                        />
                        <input 
                            placeholder="Password" 
                            type="password" 
                            required
                            className="loginInput" 
                            ref={passwordRef}
                        />
                        <button type="submit" className="loginButton">Login</button>
                        <button className="registerLink">Create a new account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
