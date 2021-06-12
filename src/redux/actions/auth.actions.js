import { authConstants } from '../actionTypes';
import api from '../redux.config';

// <===================> POST: userJwtToken <===================>
const userJwtToken = (data) => async (dispatch) => {
    try {
        dispatch({
            type: authConstants.AUTH_REQUEST,
        });

        const user = {
            first_name: data?.firstName || '',
            last_name: data?.lastName || '',
            mail: data?.mail,
        };

        const res = await api.post(`/auth`, user);

        if (res.status === 200) {
            dispatch({
                type: authConstants.AUTH_SUCCESS,
                payload: res.data,
            });

            localStorage.setItem('technotesUser', data?.mail);
            localStorage.setItem('technotesJWT', res.data.jwt);
            localStorage.setItem('tokenError', '');
        } else {
            dispatch({
                type: authConstants.AUTH_FAILED,
                error: 'unable to get jwt token',
            });
        }
    } catch (e) {
        // if (e === '') {
        //     let token = '';

        //     if (typeof window !== 'undefined') {
        //         token = localStorage.getItem('technotesJWT');
        //     }

        //     console.log(token);
        // }

        dispatch({
            type: authConstants.AUTH_FAILED,
            error: e,
        });
    }
};

export default userJwtToken;
