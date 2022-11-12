import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import Post from './Post';

export default function Posts() {
   const [posts , setPosts] = useState([]);
   useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db , "posts")
        )
   })
    return <div>
        {posts.map(post =>(
            <Post
                key={post.id}
                id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
            />
        ))}
    </div>;
}