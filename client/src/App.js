import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar.js';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import './App.css';

const App = () => (
  <Fragment>
    <Navbar />
      <FetchUser>
        <Container >
          <Switch>
            <Route  exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route component={NoMatch} />
            </Switch>
          </Container>
        </FetchUser>
  </Fragment>
)

export default App;
