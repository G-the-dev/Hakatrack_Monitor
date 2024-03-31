import axios from 'axios';

const api = axios.create({
	baseURL: 'https://haktrack-open.herokuapp.com'
});

export default api;
