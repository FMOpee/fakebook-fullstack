import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import React,{ useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Stories from "./pages/Stories/Stories";

function App() {
  const {user} = useContext(AuthContext);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={user?<Home/>: <Login/>}/>
        <Route path="/login" element={user? <Navigate to="/" /> : <Login/>}/>
        <Route path="/register" element={user? <Navigate to="/"/> : <Register/>}/>
        <Route path = "/story" element={<Stories/>}/>

        {/* <Route path="/" element= {<Home/>}/> */}
      </Routes>
    </Router>
  );
}

export default App;
