import axios from 'axios';

let token = '';

if (typeof window !== 'undefined') {
    token = localStorage.getItem('technotesJWT');
}

const api = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_URL || 'https://technotes-api.herokuapp.com/api/v1',
    headers: {
        'X-Jwt-Token': `Bearer ${token}`,
    },
});

export default api;
