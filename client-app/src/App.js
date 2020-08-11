import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import User from './components/user';
import Artist from './components/artist';
import Album from './components/album';
import Header from './components/header'
import Home from './components/home';
import NotFound from './components/not-found';

export default function App() {

  const getHashParams = () => {
    let hashParams = {};

    let e, r = /([^&;=]+)=?([^&;]*)/g,

    q = window.location.hash.substring(1);

    while ( e = r.exec(q)) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    if(hashParams.access_token){
      localStorage.setItem('token', hashParams.access_token);
    }
  }

  useEffect(() => {
    getHashParams();
  }, []);

  return(
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path='/' exact render={props => <Home {...props} />} />
          <Route path='/me' render={props => <User {...props} />} />
          <Route path='/artist/:artistId' render={props => <Artist {...props} />} />
          <Route path='/album/:albumId' render={props => <Album {...props} />} />
          <Route path='/not-found' render={props => <NotFound {...props} />} />
          <Redirect to='/not-found' />
        </Switch>
      </div>
    </Router>
  );
};