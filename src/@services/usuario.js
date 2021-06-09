import axios from "axios";

const apiURL = "http://llega-ya.com" + "/apitest/";

function listarService(page = 1, limit = 20) {
  const response = axios.get(`${apiURL}usuarios?page=${page}&limit=${limit}`);
  return response;
}

export {listarService}
