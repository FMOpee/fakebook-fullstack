import "./Post.css";
import {MoreVert, ThumbUpAlt} from "@material-ui/icons";
import { Users } from "../../data";
import React, {useState } from "react";

export default function Post({post}) {
    const [Like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);
    
    const likeHandler = ()=>{
        setLike(isLiked? Like-1 : Like+1);
        setIsLiked(!isLiked);
    }

    return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postTopDP" alt="DP" src={Users.filter((u)=> u.id === post.userID)[0].profilePicture}/>
                    <span className="postUserName">
                        {Users.filter((u)=> u.id === post.userID)[0].firstName}
                    </span>
                    <span className="postTime">{post.date}</span>
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
