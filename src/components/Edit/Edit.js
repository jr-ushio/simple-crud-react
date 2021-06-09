import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Edit.module.scss';
import {useHistory, useLocation} from "react-router-dom";
import {actualizar} from "../../@services/usuario";

const Edit = () => {
  const history = useHistory();
  const location = useLocation();
  const [id, setId] = useState(0);
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    setId(location.state.id)
    setNombres(location.state.nombres)
    setApellidos(location.state.apellidos)
    setUsuario(location.state.usuario)
  }, []);

  const update = () => {
    setMensaje('')
    actualizar({id, nombres, apellidos, usuario, password})
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
            <h1 className="text-center">ACTUALIZAR</h1>
            {mensaje.length > 0 ? <h5 className="text-center text-danger">{mensaje}</h5> : ''}
            <div>
              <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control" value={nombres} onChange={(e) => {
                  setNombres(e.target.value)
                }}/>
              </div>
              <div className="form-group">
                <label>Apellidos</label>
                <input type="text" className="form-control" value={apellidos} onChange={(e) => {
                  setApellidos(e.target.value)
                }}/>
              </div>
              <div className="form-group">
                <label>Usuario</label>
                <input type="text" className="form-control" value={usuario} onChange={(e) => {
                  setUsuario(e.target.value)
                }}/>
              </div>
              <div className="form-group">
                <label>Password (Opcional)</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={update}>
                Actualizar
              </button>
            </div>
            <div className="form-group mt-3">
              <p>No tienes una cuenta?<a href="/login"> Login </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Edit.propTypes = {};

Edit.defaultProps = {};

export default Edit;
