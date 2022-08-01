import Post from '../Post/Post';
import Share from '../Share/Share';
import './Feed.css';
// import { Posts } from '../../data'; 
import { useEffect, useState } from 'react';
import axios from 'axios';
import Stories from '../stories/Stories';

export default function Feed() {
  const [post, setpost] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:4000/post/").then((res)=>{
      const temp = res.data;
      temp.reverse();
      setpost(temp);
    });
  },[post])

  return (
    <div className='feed'>
    
        <div className='feedWrapper'>
          <Stories/>
          <Share/>
          {post.map(p=>(
            <Post key={p._id} post={p}/>
          ))}

        </div>
    </div>
  )
}
