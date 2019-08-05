import {
    historyRequest,
    historySuccess,
    historyFailure
} from "./requestHistoryList.actions";

import axios from "../api";

const options = { day: 'numeric', month: 'numeric', year: '2-digit', hour: 'numeric',  minute: 'numeric' };

export const getHistory = () => async dispatch => {
    dispatch(historyRequest());
    try {
        const historyResult = await axios.get('/api/search');
        const historyItems = historyResult.data.data.map(item => ({
            city: item.city,
            createdAt: new Date(item.createdAt).toLocaleString("ru-RU", options),
            id: item._id
        }));
        dispatch(historySuccess({items: historyItems}));
    } catch (err) {
        dispatch(historyFailure(err));
    }

};
