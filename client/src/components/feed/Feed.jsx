import Post from '../Post/Post';
import Share from '../Share/Share';
import './Feed.css';
import React,{ useEffect, useState } from 'react';
import axios from 'axios';

export default function Feed() {
  const [post, setpost] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/post/").then((res)=>{
    // axios.get("http://localhost:4000/post/").then((res)=>{
      const temp = res.data;
      temp.reverse();
      setpost(temp);
    });
  },[])

  return (
    <div className='feed'>
    
        <div className='feedWrapper'>
          <Share/>
          {post.map(p=>(
            <Post key={p._id} post={p}/>
          ))}

        </div>
    </div>
  )
}
