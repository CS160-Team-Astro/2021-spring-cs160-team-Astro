import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../../actions/users';
import useStyles from './styles'; 


const SignUp = () => {
    const [postData, setPostData] = useState({
        name:'', city:'', username: '', password_hash: ''});
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createUser(postData));
        

    }

    const clear = () => {

    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Register</Typography>
                <TextField name="name" variant="outlined" label="Name" fullWidth value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })}/>
                <TextField name="city" variant="outlined" label="City" fullWidth value={postData.city} onChange={(e) => setPostData({ ...postData, city: e.target.value })}/>
                <TextField name="creator" variant="outlined" label="Username" fullWidth value={postData.username} onChange={(e) => setPostData({ ...postData, username: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Password" fullWidth value={postData.password_hash} onChange={(e) => setPostData({ ...postData, password_hash: e.target.value })}/>
                
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit"  fullWidth>Sign Up</Button>
                <Button id = "loginButton" component={Link} to="/loginpage" variant="contained" color="primary" size="large" type="submit" fullWidth>Already have an account? Sign in</Button>
            </form>
        </Paper>
    );
}

export default SignUp;

