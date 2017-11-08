import React from 'react';
import {
  Route,
  IndexRoute
} from 'react-router';
import App from './app';
import HomePage from './components/home/home.page';
import AboutPage from './components/about/about.page';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}>this is index</IndexRoute>
        <Route path="about" component={AboutPage}>About page</Route>
    </Route>
);
