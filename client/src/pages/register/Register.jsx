import "./register.css";

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Fakebook</h3>
                <span className="loginDesc">We're fake bro. Go back.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Name" className="loginInput"/>
                    <input placeholder="DP Link" className="loginInput"/>
                    <input placeholder="Email" className="loginInput"/>
                    <input placeholder="Password" className="loginInput"/>
                    <button className="loginButton">Sign Up</button>
                    <button className="registerLink">Already Have an Account? Login.</button>
                </div>
            </div>
        </div>
    </div>
  )
}
