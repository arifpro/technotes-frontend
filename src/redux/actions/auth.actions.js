import { authConstants } from '../actionTypes';
import api from '../redux.config';

// <===================> POST: userJwtToken <===================>
const userJwtToken = (data) => async (dispatch) => {
    try {
        dispatch({
            type: authConstants.AUTH_REQUEST,
        });

        const { firstName, lastName, mail } = data;
        const user = {
            first_name: firstName,
            last_name: lastName,
            mail,
        };

        const res = await api.post(`/auth`, user);

        if (res.status === 200) {
            dispatch({
                type: authConstants.AUTH_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: authConstants.AUTH_FAILED,
                error: 'unable to get jwt token',
            });
        }
    } catch (e) {
        dispatch({
            type: authConstants.AUTH_FAILED,
            error: e,
        });
    }
};

export default userJwtToken;
