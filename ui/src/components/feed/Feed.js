import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../post/Post';
import Share from '../share/Share';
import './feed.css';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('posts/timeline/6180d88d068f7a2396cb63cd');
      setPosts(res.data)
    };
    fetchPosts();
  }, []);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map(p => (
          <Post key={p.id} post={p} />
        ))} 
      </div>
    </div>
  );
}
