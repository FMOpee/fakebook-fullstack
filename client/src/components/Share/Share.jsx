import "./Share.css";
import {PermMedia, Label, EmojiEmotions} from "@material-ui/icons"
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useRef } from "react";
import axios from "axios";

export default function Share() {

    const {user} = useContext(AuthContext);
    const contentRef = useRef();

    const onShare = async (e) =>{
        e.preventDefault();
        const content = contentRef.current.value;
        try {
            await axios.post(
                    "http://localhost:8000/post/",
                    // "http://localhost:4000/post/",
                    {
                        userID:user._id, 
                        content:content
                    }
                ).
                then((res)=>{
                    console.log(res);
                }
            );
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="share">
            <form className="shareWrapper" onSubmit={onShare}>
                <div className="shareTop">
                    <img  className="shareDP" src={user.profilePicture} alt="dp"/>
                    <input 
                        placeholder="We know whats in your mind muhahaha" 
                        className = "shareInput"
                        required
                        ref={contentRef} 
                    />
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
                    <button className="shareButton" type="submit">Share</button>
                </div>
            </form>
        </div>
    )
}
