import "./story.css";

import React from 'react'

export default function Story() {
    return (
        <div className="storyWrapper">
            <div className="storyImage">
                <img 
                    className="mainImage" 
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                />
                <img
                    className="dpImage"
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                />
            </div>
        </div>
    )
}
