import "./Story.css";
import {MoreVert, ThumbUpAlt} from "@material-ui/icons";
// import { Users } from "../../data";
import React, {useState, useEffect } from "react";
import axios from "axios";
import {format} from "timeago.js";


export default function Story({userID, storyID, stime}) {
    
    const [user, setuser] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:8000/user/Control/${userID}`).then((res)=>{
        // axios.get(`http://localhost:4000/user/Control/${userID}`).then((res)=>{
                setuser(res.data);
        });
    },[userID]);

    const imgURL = "http://localhost:8000/story/image/"+storyID;

    // const imgURL = "http://localhost:4000/story/image/"+storyID;


    return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postTopDP" alt="DP" src={user.profilePicture}/>
                    <span className="postUserName">
                        {user.firstName}
                    </span>
                    <span className="postTime">{format(stime)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <img 
                    className="postImg" 
                    src={imgURL}
                    alt="not" 
                />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUpAlt className="postLikeIcon" />
                    <span className="likeCounter">10</span>
                </div>
                <div className="postBottomRight">
                    <span className="postComment">Comment</span>
                </div>
            </div>
        </div>
    </div>
  )
}
