import axios from 'axios';

const api = axios.create({
 baseURL: 'http://localhost:3567',
})

export default api;