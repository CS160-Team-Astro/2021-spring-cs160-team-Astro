import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Top50 from './components/Top50/Top50';
import All_artists from './components/All_artists/All_artists';
import All_songs from './components/All_songs/All_songs';
import Auth from './components/SignUp/signup';



const App = () => {
    

    return(
        <BrowserRouter>
            <Container maxidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/top50" exact component={ Top50 } />
                    <Route path="/allartists" exact component={ All_artists } />
                    <Route path="/allsongs" exact component={ All_songs } />
                    <Route path="/auth" exact component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;