import "./sidebar.css";
import {RssFeed, People} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed/> Feed
                </li>
                <li className="sidebarListItem">
                    <People/> Friends
                </li>
            </ul>
        </div>
    </div>
  )
}
