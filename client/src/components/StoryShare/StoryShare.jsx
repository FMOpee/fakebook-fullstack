import "./StoryShare.css";
import {PermMedia, Label, EmojiEmotions} from "@material-ui/icons"
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useRef, useState } from "react";
import axios from "axios";

export default function StoryShare() {

    const [file, setFile] = useState();

    const {user} = useContext(AuthContext);

    const onShare = async (e) =>{
        e.preventDefault();
        
        const data = new FormData();
        data.append('image', file);
        
        
        fetch ("http://localhost:8000/story/image", {
        // fetch ("http://localhost:4000/story/image", {
            method: "POST",
            // credentials: "include",
            body: data
        }).then(response => response.json()).then(obj => {
            postImageID(obj.fileId);
        });
    }

    const postImageID = async (storyId) => {
        console.log(storyId);
        
        fetch("http://localhost:8000/story", {
        // fetch("http://localhost:4000/story", {
            method: "POST",
            // credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                uid: user._id,
                filename: storyId
            }),
        }).then(response => response.json()).then(
            obj =>{
            console.log(obj);
        });
    }

    return (
        <div className="share">
            <form className="shareWrapper" onSubmit={onShare}>
                <div className="shareTop">
                    <img  className="shareDP" src={user.profilePicture} alt="dp"/>
                    <input 
                        type="file" 
                        onChange={ event => {
                            const file = event.target.files[0];
                            setFile(file)
                        }}
                        required
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
