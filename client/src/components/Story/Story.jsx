import "./Story.css";
import {MoreVert, ThumbUpAlt} from "@material-ui/icons";
// import { Users } from "../../data";
import React, {useState, useEffect } from "react";
import axios from "axios";
import {format} from "timeago.js";


export default function Story({userID, storyID}) {
    // const [Like, setLike] = useState(story.likes);
    // const [isLiked, setIsLiked] = useState(false);
    
    const [user, setuser] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:8000/user/Control/${userID}`).then((res)=>{
            setuser(res.data);
        });
    },[userID]);

    const imgURL = "http://localhost:8000/story/image/"+storyID;


/*    const likeHandler = ()=>{
        setLike(isLiked? Like-1 : Like+1);
        setIsLiked(!isLiked);
    }
*/
    return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postTopDP" alt="DP" src={user.profilePicture}/>
                    {/* <img className="postTopDP" alt="DP" src="https://yt3.ggpht.com/yti/AJo0G0k6U2eFqkpgebya76ld4hIbtHIeCMcMysN9UNaDxA=s88-c-k-c0x00ffffff-no-rj-mo"/> */}
                    <span className="postUserName">
                        {user.firstName}
                        {/* LOL */}
                    </span>
                    {/* <span className="postTime">{format(story.createdAt)}</span> */}
                    <span className="postTime">1 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                {/* <img 
                    className="postImg" 
                    src="https://lh3.googleusercontent.com/OpGZmoypT0FKeD5kfLdXzpRt6SqYO2q-bJ3QF9GT8Pv1apdJF26ziSqih2S4N5OOmb9sDmMRTyiq_U7qdfLocThGbNUV_LzwQ6GIakpAdR1jh_SFSUrLvtfuYH8ln9tZVz9SM3x46H0OqkF3hbP4mDgdhQZ9ph5GEsTaFKUGixTjMOXiMY1r8zJyd-POMvl-ejSlJhskpdQE3CvTI4r1qiTLwmbAAJuuRW1CwjigNcaw3DYz_4FjHbNoxOBKyOzfDRhtlPfDWihsBVH8X8Os5_egtu3vZpYTMTioqr88E2NmpRwOmRrwd37M_2oU2_LUtkGsSt5WXaWJXGUZgECc2LuH01KDOlS4OWAvpIDcbFlcTOnlxs7NzC1R34hMNnFho00cyERIIMI6vh6PCmOlDVlUthbyiXYs16lAaI_qCQCdEu8lgQrlZyX1uDuMvLYf71nilm3fPV51MzYZY5afKk7yUgmowMJHAkg6_tfbUHY8lnAj8UFo_evXKxM6hhLOtXBvPBm90yJzyl0G8d5jsiG4UXQcoZzy0uaRjN5Dyya9UdmDHqHUQlN5zrPMpmHx1Y6ZPbgG4m2VxSfCZpP1J0Io1YjsM9rO4rbHueAFm6koe7e3E9_1IS6a6IndjQKlLw_6pvnOSL1ljSEUWNOtb1FnuiL5ZdJgI_CjmoVcIz2Oa6WhfeaRIsfOP0SaioQN3a-GIG8EXb0Vfqj6oQ5yhm7MBQhF3LUrIMQkU65KyVJxZcjjdQPo-fySp4BnWH1LwB3Nb8olY7zMuMJEw9hy_6BsBFV_yhLSDfhvsI9IQm72GKU0BP4mFAD13wWha5KnED4zZ3yBL7DmIZ6a7bhI8quVVbSsU5SmqfdmfhrZXnnqygmBbpJ5afyfgNjpMvAHje4DZ6XKIOXgU8IrDld5e46T631ALkvJ5k9hdHCKJBg0AjJfacjQObJuGU56Ug9EH6idKk7R52Vy=w1632-h918-no?authuser=1" 
                    alt="not" 
                /> */}
                <img 
                    className="postImg" 
                    src={imgURL}
                    alt="not" 
                />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    {/* <ThumbUpAlt className="postLikeIcon" onClick={likeHandler}/> */}
                    <ThumbUpAlt className="postLikeIcon" />
                    {/* <span className="likeCounter">{Like}</span> */}
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
