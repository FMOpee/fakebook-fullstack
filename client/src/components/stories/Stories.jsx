import "./stories.css";

import React from 'react'
import Story from "../story/Story";

export default function Stories() {
    return (
        <div className="storyWrapper">
            <Story/>
            <Story/>
            <Story/>
        </div>
        
    )
}
