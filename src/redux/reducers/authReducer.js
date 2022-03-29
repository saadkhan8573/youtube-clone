import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from "../actions/actionTypes";

const initialstate = {
    accessToken: sessionStorage.getItem('ytc-access-token') ? sessionStorage.getItem('ytc-access-token') : null,
    loading: false,
    user: sessionStorage.getItem('ytc-user') ? JSON.parse(sessionStorage.getItem('ytc-user')) : null
};

const authReducer = (state = initialstate, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: action.payload,
                loading: false,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                accessToken: null,
                loading: false,
                error: action.payload,
            }
        case LOAD_PROFILE:
            return {
                ...state,
                user: action.payload,
                loading : false
            }
        case LOG_OUT:
            return {
                ...state,
                accessToken: null,
                user: null,
            }
        default: return state
    }
}

export default authReducer;