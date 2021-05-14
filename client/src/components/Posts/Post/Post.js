import React, { useEffect, useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Stop from '@material-ui/icons/Stop';
import Pause from '@material-ui/icons/Pause';
import useStyles from './styles';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { likePost, deletePost } from '../../../actions/posts';
    
const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const audioTune = new Audio(post.selectedFile);
    console.log(post.selectedFile)

    const [playInLoop, setPlayInLoop] = useState(false);

    useEffect(() => {
        audioTune.load();
    }, [])

    useEffect(() => {
        audioTune.loop = playInLoop;
    }, [playInLoop])
    
    const playSound = () => {
        audioTune.play();
    }

    const pauseSound = () => {
        audioTune.pause();
    }

    const stopSound = () => {
        audioTune.pause();
        audioTune.currentTime = 0;
    }

    return(
        <Card id = {post.title} className={classes.card}>
            <CardMedia id = "card" className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button 
                    style={{color: 'white'}} 
                    size="small" 
                    onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {post.likeCount}
                </Button>
                <Button id = "delete" size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
                <Button id = "play"  onClick={playSound}>
                    <PlayArrow fontSize="small" />
                </Button>
                <Button id = "pause"  onClick={pauseSound}>
                    <Pause fontSize="small" />
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;