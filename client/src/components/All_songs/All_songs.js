import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { allPosts } from '../../actions/posts';



import Posts from '../Posts/Posts';

const All_songs = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(allPosts());
    }, [dispatch]);

    return (
        <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={1}>
                        <Grid item xs={6} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    )
}

export default All_songs
