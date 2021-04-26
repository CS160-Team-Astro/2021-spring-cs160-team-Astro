import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import Login from '../Login/Login';

const Auth = () => {
    return (
        <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="center">
                    
                        <Login/>
                        
                    </Grid>
                </Container>
            </Grow>
    )
}

export default Auth;