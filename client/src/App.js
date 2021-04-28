import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';
import Top50 from './components/Top50/Top50';
import All_artists from './components/All_artists/All_artists';
import All_songs from './components/All_songs/All_songs';



const App = () => {
    

    return(
        <BrowserRouter>
            <Container maxidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={ Home } />
                    <Route path="/auth" exact component={ Auth } />
                    <Route path="/top50" exact component={ Top50 } />
                    <Route path="/allartists" exact component={ All_artists } />
                    <Route path="/allsongs" exact component={ All_songs } />
                </Switch>
            </Container>
        </BrowserRouter>
    );
}

export default App;