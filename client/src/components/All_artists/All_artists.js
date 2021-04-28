import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../actions/users';
import Users from '../Users/users';

const All_artists = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    
    return (
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Users setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
    )
}

export default All_artists
