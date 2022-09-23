import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./Home.css";
import React from "react";

export default function Home() {
  // const {user, isFetching, error, dispatch} = useContext(AuthContext);    
  // console.log(user);

  return (
    <>
        <Topbar/>
        <div className="homeContainer">
          <Sidebar/>
          <Feed/>
          <Rightbar/>
        </div>
    </>
  )
}
