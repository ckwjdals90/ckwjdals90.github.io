import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../App';
import Home from '../containers/Home';
import About from '../containers/About';
import Portfolio from '../containers/Portfolio';
import Project from '../containers/Project';
import Contact from '../containers/Contact';

module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="portfolio" component={Portfolio}>
        <Route path=":id" component={Project} />
      </Route>
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
)
