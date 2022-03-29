import { RELATED_VIDEO_FAIL, RELATED_VIDEO_REQUEST, RELATED_VIDEO_SUCCESS } from "../actions/actionTypes"

const initialState = {
    loading: true,
    videos: [],
}
const relatedVideo = (state = initialState, action) => {
    switch (action.type) {
        case RELATED_VIDEO_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case RELATED_VIDEO_SUCCESS:
            return {
                ...state,
                videos: action.payload,
                loading: false,
            }
        case RELATED_VIDEO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state
    }
}

export default relatedVideo
