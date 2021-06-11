import { authConstants } from '../actionTypes';

const initialState = {
    loading: false,
    error: '',
    success: '',
    authData: [],
};

const authReducer = (state = initialState, action) => {
    // console.log(action);
    console.log(action.payload);

    switch (action.type) {
        // <===================> POST: userJwtToken <===================>
        case authConstants.AUTH_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case authConstants.AUTH_SUCCESS:
            return {
                ...state,
                loading: false,
                success: 'success',
                authData: action.payload,
            };
        case authConstants.AUTH_FAILED:
            return {
                ...state,
                loading: false,
                error: 'unable to set jwt token',
            };

        default:
            return state;
    }
};

export default authReducer;
