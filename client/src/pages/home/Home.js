import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/rightbar";
import Sidebar from "../../components/sidebar/sidebar";
import Topbar from "../../components/Topbar/Topbar";
import "./Home.css";

export default function Home() {
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
