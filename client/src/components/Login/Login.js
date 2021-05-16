import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../../actions/users';
import useStyles from './styles';  

const Login = () => {
    const [postData, setPostData] = useState({
        username: '', password_hash: ''});
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
                <Typography variant="h6">Log In</Typography>
                <TextField name="creator" variant="outlined" label="Username" fullWidth value={postData.username} onChange={(e) => setPostData({ ...postData, username: e.target.value })}/>
                <TextField name="title" variant="outlined" label="Password" fullWidth value={postData.password_hash} onChange={(e) => setPostData({ ...postData, password_hash: e.target.value })}/>
                
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" component={Link} to="/" fullWidth>Sign In</Button>
                <Button id = "signUpButton" component={Link} to="/SignUpPage" variant="contained" color="primary" size="large" type="submit" fullWidth>New to Jam? Create account</Button>
            </form>
        </Paper>
    );
}

export default Login;