import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const Comment = (props) => {
    const { name, body, email } = props.comment;

    const classes = useStyles();
    return (
        <Box component="span" m={1} alignItems="center">
            <List className={classes.root} style={{ backgroundColor: 'lightgrey'}} alignItems="center" m = {2} p = {3}>
      <ListItem>
        
        <ListItemText>
            <Box>
               <h3>Name: {name}</h3>
            </Box>

            <Box>
            <p>{body}</p>
            </Box>

            <Box>
            <p><small>Email: {email}</small></p>
            </Box>

        </ListItemText>

      </ListItem>
    </List>
        </Box>
    );
};

export default Comment;