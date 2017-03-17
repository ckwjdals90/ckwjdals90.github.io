import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from '../App.jsx';
import Home from '../containers/Home.jsx';
import About from '../containers/About.jsx';
import Portfolio from '../containers/Portfolio.jsx';
import Project from '../containers/Project.jsx';
import Contact from '../containers/Contact.jsx';

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
);
