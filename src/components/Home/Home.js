import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.scss';
import {listar, eliminar} from "../../@services/usuario";
import {useHistory, useLocation} from "react-router-dom";
import Pagination from "../Pagination";

const Home = () => {
  const history = useHistory();
  const location = useLocation();
  const [usuarios, setUsuarios] = useState([])

  const [currentPage, setCurrentPage] = useState(2);
  const [pageSize] = useState(5);
  const [totalResults, setTotalResults] = useState(1);

  // Pagination
  const paginate = page => {
    setCurrentPage(page);
    listarUsuarios(page)
  };

  const goEdit = (id, nombres, apellidos, usuario) => {
    history.push({
      pathname: '/edit',
      state: {
        id,
        nombres,
        apellidos,
        usuario
      },
    });
  }
  const listarUsuarios = (pagina = 1) => {
    pagina=pagina
    listar(pagina).then(resp => {
      console.log('resp ', resp.data);
      if (resp.data.codigo === 200) {
        setUsuarios(resp.data.data.data)
        setTotalResults(resp.data.data.total)
      }
    })
  }
  const eliminarUsuarios = (id) => {
    eliminar({id}).then(resp => {
      console.log('resp ', resp.data);
      if (resp.data.codigo === 200) {
        listarUsuarios();
      }
    })
  }
  const goRegister = () => {
    history.push('/register')
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
          <a className="btn btn-primary" onClick={goRegister}>REGISTRAR</a>
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
                  <button className="btn btn-success m-1" type="button" onClick={goEdit.bind(this, usuario.id,usuario.nombres, usuario.apellidos, usuario.usuario)}>Editar</button>
                  <button className="btn btn-danger m-1" type="button" onClick={eliminarUsuarios.bind(this, usuario.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
          
          <Pagination
            totalResults={totalResults} // total usuarios
            currentPage={currentPage}  //pagina actual
            pageSize={pageSize}       // numero de registros por pagina
            paginate={paginate}       //  funcion
            //pageNeighbours={1}

            //totalRecords={10}
            //pageLimit={18}
            //pageNeighbours={1}
            //onPageChanged={setUsuarios}

          />
          
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
