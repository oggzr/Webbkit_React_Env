import React from 'react';
import { render } from 'react-dom';
import {Router, browserHistory, BrowserRouter} from 'react-router-dom';
import routes from './routes';

render(
  <BrowserRouter history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
