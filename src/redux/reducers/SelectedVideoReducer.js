import { SELECTED_VIDEO_FAIL, SELECTED_VIDEO_REQUEST, SELECTED_VIDEO_SUCCESS } from "../actions/actionTypes"

const initialState = {
    loading: true,
    video: null,
}

const SelectedVideoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_VIDEO_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SELECTED_VIDEO_SUCCESS:
            return {
                ...state,
                video: action.payload,
                loading: false,
            }
        case SELECTED_VIDEO_FAIL:
            return {
                ...state,
                video: null,
                loading: false,
                error: action.payload,
            }

        default:
            return state
    }
}

export default SelectedVideoReducer
