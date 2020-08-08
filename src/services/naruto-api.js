import axios from 'axios';

const narutoApi = axios.create({
  baseURL: 'http://localhost:3030',
});

export default narutoApi;
