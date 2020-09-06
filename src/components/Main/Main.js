import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Main = () => {
   const [posts, setPosts] =  useState([]);

   const postUrl = 'https://jsonplaceholder.typicode.com/posts';
   useEffect (() => {
    fetch (postUrl)
    .then (res => res.json())
    .then (data => setPosts(data))
   } , 
    [])
    return (
        <div>
        
            {
                posts.map(post => <Post post ={post} key ={post.id}></Post>)
            }
        </div>

    );
};

export default Main;