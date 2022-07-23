import "./Topbar.css";
import {Search} from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">Fakebook</span>
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
