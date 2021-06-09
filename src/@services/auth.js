import axios from "axios";

const apiURL = "http://llega-ya.com" + "/apitest/";

function loginService({usuario, password}) {
  const response = axios.post(`${apiURL}login`, {usuario, password});
  response.then((resp)=>{
    if (resp.data.codigo === 200) {
      localStorage.setItem('usuario', JSON.stringify(resp.data.data))
    }
    return resp
  })
  return response;
}

export {loginService}
