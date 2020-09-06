import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {postId} = useParams();
   const [post, setPost] = useState([]);
   const [comment, setComment] = useState([]);

   const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
            .catch((error) => {
                console.log(error)
            });
    }, [url]);

    const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    useEffect(() => {
        fetch(commentUrl)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [commentUrl]);
    return (
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc'}} >
            <Box>
                <Post post = {post} />
            </Box>
            <hr/>
            <Box>
            
                {
                   comment.map(comment => <Comment key={comment.id} comment={comment} />)
                 }
            
            </Box>
        </Typography>
      </Container>
    </React.Fragment>
    );
};

export default PostDetail;