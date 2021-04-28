import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts';


import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts) 
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    

    return (
        <Grow in>
                <Container>
                    <h1 align="left" style={ {color: 'white',fontFamily:'Arial'}}>MOST RECENT POSTS</h1>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    )
}

export default Home;