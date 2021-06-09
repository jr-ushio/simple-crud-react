import axios from "axios";

const apiURL = "http://llega-ya.com" + "/apitest/";

function listar(page = 1, limit = 20) {
  const response = axios.get(`${apiURL}usuarios?page=${page}&limit=${limit}`);
  return response;
}
function actualizar({id, nombres, apellidos, usuario, password}) {
  const response = axios.put(`${apiURL}usuarios/${id}`, {nombres, apellidos, usuario, password});
  response.then((resp)=>{
    return resp
  })
  return response;
}
function eliminar({id}) {
  const response = axios.delete(`${apiURL}usuarios/${id}`);
  response.then((resp)=>{
    return resp
  })
  return response;
}
export {listar, actualizar, eliminar}
