import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://kurokami.vercel.app/api',
  timeout: 15000,
});

export default axiosInstance;
