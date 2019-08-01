import {
    loginRequest,
    loginSuccess,
    loginFailure,
    registerRequest,
    registerSuccess,
    registerFailure,
    checkLoginRequest,
    checkLoginSuccess,
    checkLoginFailure
} from "./auth.actions";
import axios from '../api';
import history from '../history';



export const submitLogin = (data) => async dispatch => {
    dispatch(loginRequest());
        try {
            const result = await axios.post('/auth/login', data);
            // localstorage
            //redirect
            localStorage.setItem('token', result.data.token);
            history.push('/weather');
            dispatch(loginSuccess(result));
        } catch (err) {
            dispatch(loginFailure(err));
        }

};

export const submitRegister = (data) => async dispatch => {
    dispatch(registerRequest());
    try {
        const result = await axios.post('/auth/register', data);
        // localstorage
        //redirect
        history.push('/');
        dispatch(registerSuccess(result));
    } catch (err) {
        dispatch(registerFailure(err));
    }

};

export const checkLogin = () => async dispatch => {
    dispatch(checkLoginRequest());
    try {
        const result = await axios.get('/auth/checkLogin');

        dispatch(checkLoginSuccess(result));
    } catch (err) {
        dispatch(checkLoginFailure(err));
        localStorage.removeItem('token');
    }

};