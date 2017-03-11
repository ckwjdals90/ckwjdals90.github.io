import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Home from './containers/Home';
import About from './containers/About';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';

import './index.css';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="portfolio" component={Portfolio} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>,
  rootElement
);
