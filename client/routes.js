import React from 'react';
import {Route,IndexRoute,BrowserRouter} from 'react-router-dom';
import App from './components/App.js';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
  <BrowserRouter path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
  </BrowserRouter>
);
