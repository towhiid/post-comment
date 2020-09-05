import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Main = () => {
   const [posts, setPosts] =  useState([]);

   let postUrl = 'https://jsonplaceholder.typicode.com/posts';
   useEffect (() => {
    fetch (postUrl)
    .then (res => res.json())
    .then (data => setPosts(data))
   } , 
    [])
    return (
        <div>
        
            {
                posts.map(post => <Post post ={post}></Post>)
            }
        </div>

    );
};

export default Main;