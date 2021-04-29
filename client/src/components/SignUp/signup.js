import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPost } from '../../actions/posts';
import useStyles from './styles';  

const SignUp = () => {
    const [postData, setPostData] = useState({
        username: '', password: '', selectedFile: '' });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData))
    }

    const clear = () => {

    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Register</Typography>
                <TextField name="creator" variant="outlined" label="Username" fullWidth value={postData.username} onChange={(e) => setPostData({ ...postData, username: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Password" fullWidth value={postData.password} onChange={(e) => setPostData({ ...postData, password: e.target.value })}/>
                
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Sign Up</Button>
                <Button id = "loginButton" component={Link} to="/loginpage" variant="contained" color="primary" size="large" type="submit" fullWidth>Already have an account? Sign in</Button>
            </form>
        </Paper>
    );
}

export default SignUp;

