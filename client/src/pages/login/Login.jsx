import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Fakebook</h3>
                <span className="loginDesc">We're fake bro. Go back.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput"/>
                    <input placeholder="Password" className="loginInput"/>
                    <button className="loginButton">Login</button>
                    <button className="registerLink">Create a new account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
