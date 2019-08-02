import api from '../api';
import { REGISTER } from './types';
import history from '../history';

export const register = (formValues) => async dispatch => {
    await api.post('register', formValues);
    dispatch({ type: REGISTER });
    history.push('/');
};


// export const signInAction = ({ formValues }, requestHistoryList) => async (dispatch) => {
//         try {
//             const res = await api.post('register', { formValues });
//             dispatch({ type: AUTHENTICATED });
//             localStorage.setItem('username', res.data.token);
//             requestHistoryList.push('/weather');
//         } catch(error) {
//             dispatch({
//                 type: AUTHENTICATION_ERROR,
//                 payload: 'Invalid email or password'
//             });
//         }
// };
