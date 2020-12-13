import React from 'react';
import { Switch, Route } from 'react-router-dom';

import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/portfolio" component={Portfolio} />
  </Switch>
);

export default Routes;
