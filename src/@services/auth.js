import axios from "axios";

const apiURL = "http://llega-ya.com" + "/apitest/";

function iniciarSession({usuario, password}) {
  const response = axios.post(`${apiURL}login`, {usuario, password});
  response.then((resp)=>{
    if (resp.data.codigo === 200) {
      localStorage.setItem('usuario', JSON.stringify(resp.data.data))
    }
    return resp
  })
  return response;
}
function registraUsuario({nombres, apellidos, usuario, password}) {
  const response = axios.post(`${apiURL}usuarios`, {nombres, apellidos, usuario, password});
  response.then((resp)=>{
    if (resp.data.codigo === 200) {
      localStorage.setItem('usuario', JSON.stringify(resp.data.data))
    }
    return resp
  })
  return response;
}

export {iniciarSession, registraUsuario}
