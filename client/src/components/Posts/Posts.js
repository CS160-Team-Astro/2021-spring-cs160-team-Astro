import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { deletePost} from '../../actions/posts'


import Post from './Post/Post';

import useStyles from './styles';


const Posts = () => {
    const posts = useSelector((state) => state.posts)
    const classes = useStyles();
    const dispatch = useDispatch();
    // Delete test button
    //<button onClick = {() => {console.log(post); dispatch(deletePost(post.id))}}> delete </button> 

    console.log(posts);
    return(
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post.id} item>
                                   
                    </Grid>
                ))} 
            </Grid>
        )
    );
}

export default Posts;