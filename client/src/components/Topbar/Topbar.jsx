import "./Topbar.css";
import {Search} from '@material-ui/icons';
import { Link } from "react-router-dom";
import React,{ useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {

  const {user} = useContext(AuthContext);

  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <Link to="/" style={{textDecoration: "none"}}>
          <span className="logo">Fakebook</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="Search for friends or posts" className="searchInput"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Profile</span>
        </div>
        <span className="topbarLink">{user.firstName}</span>
        <img  src={user.profilePicture} 
              alt="dp" className="topbarImg"/>
      </div>
    </div>
  )
}
