import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
});

export default api;