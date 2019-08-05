import axios from "axios";

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

export const weatherApiInstance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/forecast'
});

export const OPENWEATHER_API_KEY = '21cd7ffaf13d91a005d5854834f990b0';

export default axiosInstance;