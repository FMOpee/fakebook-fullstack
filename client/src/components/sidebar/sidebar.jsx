import "./sidebar.css";
import {RssFeed, People} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <Link to="/" style={{textDecoration: "none"}}>
                        <RssFeed/> Feed
                    </Link>
                </li>
                <li className="sidebarListItem">
                    <Link to="/story" style={{textDecoration: "none"}}>
                        <RssFeed/> Stories
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
