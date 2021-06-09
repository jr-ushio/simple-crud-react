import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { lazy, Suspense, useState } from 'react';
import Login from './components/Login/Login.lazy'
import Home from "./components/Home/Home.lazy";
import Navbar from "./components/Navbar/Navbar.lazy";
import GuardedRoute from "./GuardedRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <GuardedRoute path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
