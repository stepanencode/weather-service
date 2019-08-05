import {
    searchRequest,
    searchSuccess,
    searchFailure
} from "./search.actions";


import axios, { weatherApiInstance, OPENWEATHER_API_KEY } from '../api';

const options = { day: 'numeric', month: 'numeric', year: '2-digit', hour: 'numeric',  minute: 'numeric' };


export const submitSearch = (city, latitude, longitude) => async dispatch => {
    dispatch(searchRequest());
        try {
            const weatherResult = await weatherApiInstance.get(`?lat=${latitude}&lon=${longitude}&appid=${OPENWEATHER_API_KEY}&units=metric`);
            const items = weatherResult.data.list.map(item => ({
                dateString: new Date(item.dt * 1000).toLocaleString("ru-RU", options),
                temperature: ((Math.floor(item.main.temp) > 0) ? ("+" + (Math.floor(item.main.temp))) : (Math.floor(item.main.temp))),
                weatherText: item.weather[0].main,
                weatherIcon: item.weather[0].icon
            }));


            // const token = localStorage.getItem("token");
            const backendResult = await axios.post('/api/search', {city, items}, );
            console.log(backendResult, 'backend result');
            // console.log(weatherResult.data, 'weather result');


            // const requestCity = weatherResult.data.city.name;
            // console.log(requestCity, 'weather result city');


            // const createdRequestDate = backendResult.data.data.createdAt;
            // console.log(createdRequestDate, 'backend result date');
            dispatch(searchSuccess({city, items}));
        } catch (err) {
            dispatch(searchFailure(err));
        }

};
