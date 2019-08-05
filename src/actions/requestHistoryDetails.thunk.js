import {
    historyDetailsRequest,
    historyDetailsSuccess,
    historyDetailsFailure
} from "./requestHistoryDetails.actions";

import axios from "../api";

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
        dispatch(historyDetailsSuccess({items}));
    } catch (err) {
        dispatch(historyDetailsFailure(err));
    }
};
