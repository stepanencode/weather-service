import {
    historyRequest,
    historySuccess,
    historyFailure
} from "./requestHistoryList.actions";

import axios from '../api';


// import axios, { weatherApiInstance, OPENWEATHER_API_KEY } from '../api';

// const options = { day: 'numeric', month: 'numeric', year: '2-digit', hour: 'numeric',  minute: 'numeric' };


export const getHistory = (city, timestamps) => async dispatch => {
    dispatch(historyRequest());
    try {
        const token = localStorage.getItem("token");
        const historyResult = await axios.get('/search', {city, timestamps}, {headers: { Authorization: `Bearer ${token}` }});
        console.log(historyResult, 'history');





        dispatch(historySuccess({city, timestamps}));
    } catch (err) {
        dispatch(historyFailure(err));
    }

};
