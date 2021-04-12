import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';
import useStyles from './styles';  


const Searchbar = () => {
    const [postData, setPostData] = useState({
        searching: '' });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        //dispatch(createPost(postData))
    }

    const clear = () => {

    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Search</Typography>
                <TextField name="creator" variant="outlined" label="Search" fullWidth value={postData.username} onChange={(e) => setPostData({ ...postData, username: e.target.value })}/>
                
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Search</Button>
            </form>
        </Paper>
    );
}

export default Searchbar;