import axios from 'axios';

export default axios.create({
  baseURL: `http://10.1.1.20:8080/login`
});