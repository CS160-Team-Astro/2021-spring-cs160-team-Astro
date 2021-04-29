import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import SignUp from '../SignUp/SignUp';

const SignUpPage = () => {
    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="center">
                
                    <SignUp/>
                    
                </Grid>
            </Container>
        </Grow>
    )
}

export default SignUpPage;