import "./Share.css";
import {PermMedia, Label, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img  className="shareDP" src="https://github.com/FM-Man/fakebook-react/blob/master/public/assets/person/fm.jpg?raw=true" alt="fm"/>
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
