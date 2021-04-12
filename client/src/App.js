import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import {getPosts} from './actions/posts';
import {getUsers, createUser, deleteUser} from './actions/users';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import jam from './images/jam.png';
import useStyles from './styles';


const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users)
    const posts = useSelector(state => state.posts) 
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);
    //<button onClick = {() => dispatch(createUser({name: "hello"}))}> create user </button>
    //<button onClick = {() => dispatch(deleteUser(users[0].id))}> delete user </button>
    console.log(users)
    return(
        <Container maxidth="lg">
            <AppBar className = {classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Jam</Typography>
                <img className={classes.image} src={jam} alt="jam" height="60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts posts = {posts}/> 
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;