import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.scss';
import {loginService} from '../../@services/auth'
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const login = () => {
    setMensaje('')
    loginService({usuario, password})
      .then(resp => {
        if (resp.data.codigo === 200) {
          history.push('/')
        } else {
          setMensaje(resp.data.mensaje)
        }
      })
  }
  return (
    <div className="row">
      <div className="col-md-6 mx-auto mt-5">
        <div className="card">
          <div className="card-body">
            <h1 className="text-center">LOGIN</h1>
            {mensaje.length > 0 ? <h5 className="text-center text-danger">{mensaje}</h5>:''}
            <div>
              <div className="form-group">
                <label htmlFor="usuario">Usuario</label>
                <input
                  type="text"
                  id="usuario"
                  className="form-control"
                  onChange={(e) => {
                    setUsuario(e.target.value)
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </div>
              <button className="btn btn-primary btn-lg btn-block" onClick={login}>
                Login
              </button>
            </div>
            <div className="form-group mt-3">
              <p>
                Create an account ? <a> Register </a>
              </p>
            </div>
            <div className="form-group mt-3">
              <p>
                <a> Forgot password ? </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
