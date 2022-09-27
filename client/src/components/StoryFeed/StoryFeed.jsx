import Share from '../Share/Share';
import './StoryFeed.css';
import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import Story from '../Story/Story';
import StoryShare from '../StoryShare/StoryShare';

export default function StoryFeed() {
  const [story, setstory] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/story/").then((res)=>{
    // axios.get("http://localhost:4000/story/").then((res)=>{
      const temp = res.data;
      temp.reverse();
      setstory(temp);
    });
  },[])

  return (
    <div className='feed'>
    
        <div className='feedWrapper'>
          <StoryShare/>
          {story.map(s=>(
            <Story key={s._id} userID={s.userID} storyID={s.image} stime={s.createdAt}/>
          ))}

        
        </div>
    </div>
  )
}
