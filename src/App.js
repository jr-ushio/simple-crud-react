import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { lazy, Suspense, useState } from 'react';
import Login from './components/Login/Login.lazy'
import Home from "./components/Home/Home.lazy";
import Navbar from "./components/Navbar/Navbar.lazy";
import GuardedRoute from "./GuardedRoute";
import Register from "./components/Register/Register.lazy";
import Edit from "./components/Edit/Edit.lazy";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <GuardedRoute path='/' exact component={Home} />
          <GuardedRoute path='/edit' component={Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
