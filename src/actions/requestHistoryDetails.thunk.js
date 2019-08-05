import {
    historyDetailsRequest,
    historyDetailsSuccess,
    historyDetailsFailure
} from "./requestHistoryDetails.actions";

import axios from "../api";
import { options } from "../constants";

export const getHistoryDetails = (id) => async dispatch => {
    dispatch(historyDetailsRequest());
    try {
        const result = await axios.get(`/api/search/${id}`);
        const items = result.data.data.items.map(item => ({
            dateString: item.dateString,
            temperature: item.temperature,
            weatherText: item.weatherText,
            weatherIcon: item.weatherIcon
        }));
        const city = result.data.data.city;
        const createdAt = new Date(result.data.data.createdAt).toLocaleString("ru-RU", options);
        dispatch(historyDetailsSuccess({items: items, city: city, createdAt: createdAt}));
    } catch (err) {
        dispatch(historyDetailsFailure(err));
    }
};
