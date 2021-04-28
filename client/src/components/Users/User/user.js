import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';
    
const User = ({ user, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return(
        <Card id = {user.name} className={classes.card}>
            <CardMedia id = "card" className={classes.media} title={user.name} />
            <div className={classes.overlay}>
                <Typography variant="h6">{user.name}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button 
                    style={{color: 'white'}} 
                    size="small" 
                    onClick={() => setCurrentId(user.id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{user.name}</Typography>
            </CardContent>
        </Card>
    );
}

export default User;