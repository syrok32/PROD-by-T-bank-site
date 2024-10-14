// frontend/src/axios.js
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://89.169.128.127:8000', // URL вашего FastAPI сервера
  timeout: 5000,
})

export default axiosInstance