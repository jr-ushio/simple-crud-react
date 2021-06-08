import './App.scss';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { lazy, Suspense } from 'react';
import Login from './components/Login/Login.lazy'
import Home from "./components/Home/Home.lazy";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
