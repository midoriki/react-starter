import axios from 'axios';
import { API_ENDPOINT } from '../../config';

const instance = axios.create({
  baseURL: API_ENDPOINT,
  timeout: 20000
});

export default instance;
