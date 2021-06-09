import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import {listarService} from "../../@services/usuario";

const Home = () => {
  const [usuarios, setUsuarios] = useState([])

  const listarUsuarios = () => {
    listarService().then(resp => {
      console.log('resp ', resp.data);
      if (resp.data.codigo === 200) {
        setUsuarios(resp.data.data.data)
      }
    })
  }
  useEffect(() => {
    listarUsuarios();
  }, []);
  return (
    <div className="card">
      <h3 className="card-header text-center font-weight-bold text-uppercase py-4">USUARIOS</h3>
      <div className="card-body">
        <div id="table" className="table-editable">
        <span className="table-add float-right mb-3 mr-2">
          <a className="btn btn-primary" href="/register">REGISTRAR</a>
        </span>
          <table className="table table-bordered table-responsive-md table-striped text-center">
            <thead>
            <tr>
              <th className="text-center">Nombre</th>
              <th className="text-center">Apellidos</th>
              <th className="text-center">Usuario</th>
              <th className="text-center">Acciones</th>
            </tr>
            </thead>
            <tbody>
            {usuarios.map(usuario => (
              <tr>
                <td>
                  <span>{usuario.nombres}</span>
                </td>
                <td>
                  <span>{usuario.apellidos}</span>
                </td>
                <td>
                  <span>{usuario.usuario}</span>
                </td>
                <td>
                  <button className="btn btn-success m-1" type="button">Editar</button>
                  <button className="btn btn-danger m-1" type="button">Eliminar</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
