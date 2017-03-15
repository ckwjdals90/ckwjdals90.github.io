import React from 'react';
import ReactDOM from 'react-dom';

import routes from './routes/routes';

import './index.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(
  routes,
  rootElement
);
