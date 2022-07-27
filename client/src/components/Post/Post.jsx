import "./Post.css";
import {MoreVert, ThumbUpAlt} from "@material-ui/icons";
// import { Users } from "../../data";
import React, {useState, useEffect } from "react";
import axios from "axios";
import {format} from "timeago.js";

export default function Post({post}) {
    const [Like, setLike] = useState(post.likes);
    const [isLiked, setIsLiked] = useState(false);
    
    const [user, setuser] = useState({});
    useEffect(()=>{
        const res = axios.get(`http://localhost:4000/userControl/${post.userID}`).then((res)=>{
            setuser(res.data);
        });
    },[post.userID]);


    const likeHandler = ()=>{
        setLike(isLiked? Like-1 : Like+1);
        setIsLiked(!isLiked);
    }

    return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postTopDP" alt="DP" src={user.profilePicture}/>
                    <span className="postUserName">
                        {user.firstName}
                    </span>
                    <span className="postTime">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postContent">{post?.content}</span>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUpAlt className="postLikeIcon" onClick={likeHandler}/>
                    <span className="likeCounter">{Like}</span>
                </div>
                <div className="postBottomRight">
                    <span className="postComment">Comment</span>
                </div>
            </div>
        </div>
    </div>
  )
}
