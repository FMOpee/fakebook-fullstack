import "./Stories.css";

import React from 'react'
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Rightbar from "../../components/rightbar/rightbar";
import StoryFeed from "../../components/StoryFeed/StoryFeed";


export default function Stories() {
  return (
    <>
        <Topbar/>
        <div className="storyContainer">
          <Sidebar/>
          <StoryFeed/>
          <Rightbar/>
        </div>
    </>
  )
}
