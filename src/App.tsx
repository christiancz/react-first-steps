import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './app.scss';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} exact />
        </Switch>
      </BrowserRouter>
    </>
  )
}


