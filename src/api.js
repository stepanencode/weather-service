import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000'
});

axiosInstance.interceptors.request.use(
    config => {
        config.headers.Token = localStorage.getItem("token");
        return config;
    },
    error => Promise.reject(error)
);

export default axiosInstance;