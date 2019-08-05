import {
    getProfileRequest,
    getProfileSuccess,
    getProfileFailure,
    submitProfileRequest,
    submitProfileSuccess,
    submitProfileFailure
} from "./profile.actions";

import axios from "../api";
import history from "../history";

export const getProfile = () => async dispatch => {
    dispatch(getProfileRequest());
    try {
        const result = await axios.get('/api/profile');
        dispatch(getProfileSuccess({user: result.data.data}));
    } catch (err) {
        dispatch(getProfileFailure(err));
    }
};

export const submitProfile = (data) => async dispatch => {
    dispatch(submitProfileRequest());
    try {
        const requestData = {username: data.username};
        if (data.password && data.password.length > 0) {
            requestData.password = data.password;
        }
        const result = await axios.patch('/api/profile', requestData);
        history.push('/edit_profile');
        dispatch(submitProfileSuccess(result.data.data));
    } catch (err) {
        dispatch(submitProfileFailure(err));
    }
};
