import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppBar, Typography, Button, Avatar, Toolbar } from '@material-ui/core';
import decode from 'jwt-decode';
import useStyles from './styles';
import * as actionType from '../../constants/actionTypes';
import jam from '../../images/jam.png';

const Navbar = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const classes = useStyles();

    const logout = () => {
        dispatch({ type: actionType.LOGOUT });

        history.push('/auth');

        setUser(null);
      };

       useEffect(() => {
         const token = user?.token;

         if (token) {
           const decodedToken = decode(token);

           if (decodedToken.exp * 1000 < new Date().getTime()) logout();
         }

         setUser(JSON.parse(localStorage.getItem('profile')));
       }, [location]);


    return (
    <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
            <Typography id = "logo" component={Link} to="/" className={classes.heading} variant="h2" align="center" style={{ color: 'red',fontFamily:'Verdana'}}>Jam</Typography>
            <img className={classes.image} src={jam} alt="jam" height="60" />
            <Button component={Link} to = "/top50" size="large" color="primary" onClick={() => {}}>TOP 50</Button>
            <Button component={Link} to = "/allsongs" size="large" color="primary" onClick={() => {}}>ALL SONGS</Button>
            <Button component={Link} to = "/allartists" size="large" color="primary" onClick={() => {}}>ALL ARTISTS</Button>
        </div>
        <Toolbar className = {classes.toolbar}>
            {user?.result ? (
            <div className={classes.profile}>
                <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
            </div>
            ) : (
            <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
            )}
        </Toolbar>
    </AppBar>
    );
};

export default Navbar