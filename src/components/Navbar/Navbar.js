import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';
import {useHistory} from "react-router-dom";

const Navbar = () => {
  const history = useHistory();

  const goLogin = () => {
    history.push('/login')
  }
  const goRegister = () => {
    history.push('/register')
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand">React v17</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link btn btn-link" href="/">Home</a>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link btn btn-link" onClick={goLogin}>Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-link" onClick={goRegister}>Register</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
