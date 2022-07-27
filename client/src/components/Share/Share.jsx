import "./Share.css";
import {PermMedia, Label, EmojiEmotions} from "@material-ui/icons"
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Share() {

    const {user} = useContext(AuthContext);

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img  className="shareDP" src={user.profilePicture} alt="dp"/>
                    <input placeholder="We know whats in your mind muhahaha" className = "shareInput" />
                </div>
                <hr className="shareHR"/>
                <div className="shareBottom">
                    <div className="shareOptionContainer">
                        <div className="shareOption">
                            <PermMedia className="shareOptionIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            <Label className="shareOptionIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions className="shareOptionIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
