import api from '../api';
import { REGISTER } from './types';
import history from '../history';

export const register = (formValues) => async dispatch => {
    await api.post('register', formValues);
    dispatch({ type: REGISTER });
    history.push('/');
};
