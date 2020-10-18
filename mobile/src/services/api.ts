import axios from 'axios';

const api = axios.create({
 baseURL: 'http://192.168.0.50:3567',
})

export default api;