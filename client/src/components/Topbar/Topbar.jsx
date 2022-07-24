import "./Topbar.css";
import {Search} from '@material-ui/icons';
import { Link } from "react-router-dom";

export default function Topbar() {
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
        <img  src="https://github.com/FM-Man/fakebook-react/blob/master/public/assets/person/fm.jpg?raw=true" 
              alt="fm" className="topbarImg"/>
      </div>
    </div>
  )
}
