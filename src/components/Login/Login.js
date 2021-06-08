import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';

const Login = () => (
  <div className="row">
    <div className="col-md-6 mx-auto mt-5">
      <div className="card">
        <div className="card-body">
          <h1 className="text-center">LOGIN</h1>
          <h5 className="text-center text-danger"></h5>
          <form>
            <div class="form-group">
              <label htmlFor="usuario">Usuario</label>
              <input type="text" id="usuario" className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
              />
            </div>
            <button className="btn btn-primary btn-lg btn-block">
              Login
            </button>
          </form>
          <div className="form-group mt-3">
            <p>
              Create an account ? <a> Register </a>
            </p>
          </div>
          <div class="form-group mt-3">
            <p>
              <a> Forgot password ? </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
