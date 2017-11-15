import axios from 'axios';

const API_URL = 'https://cryptic-escarpment-73553.herokuapp.com/api/v1/';

const axiosInstace = axios.create({
  baseURL: API_URL,
});

export default axiosInstace;
