import axios from 'axios';

let token = '';

if (typeof window !== 'undefined') {
    token = JSON.parse(localStorage.getItem('technotes'))?.state?.authentication?.token;
}

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL || 'https://technotes-api.herokuapp.com/api/v1',
    headers: {
        Authorization: `Bearer ${token}`,
    },
});

export default api;
