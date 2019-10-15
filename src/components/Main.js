import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const Main = () => (
  <Switch>
    <Route path='/' component={LandingPage} exact={true} />
    <Route path='/about' component={About} />
    <Route path='/projects' component={Projects} />
    <Route path='/contact' component={Contact} />
  </Switch>
);

export default Main;