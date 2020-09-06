import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { CssBaseline } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 140,
  },
});

const Post = (props) => {
    const classes = useStyles();
    const {title, body, id} = props.post;
    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
            <Box mb = {2}>
            <Card className={classes.root} component="div" style={{ backgroundColor: 'lightgrey', height: '70vh' }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
        <Link to={`/PostDetail/${id}`}>
        <Button size="small" color="primary" variant="contained">
          See More
        </Button>
        </Link>
      </CardActions>
    </Card>
            </Box>
        </Container>
        </React.Fragment>
    );
};

export default Post;