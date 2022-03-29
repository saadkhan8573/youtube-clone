import { HOME_VIDEOS_FAIL, HOME_VIDEOS_REQUEST, HOME_VIDEOS_SUCCESS } from "../actions/actionTypes"

const initialState = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: "All"
}

const VideosReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOME_VIDEOS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case HOME_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: state.activeCategory === action.payload.category ? [...state.videos, ...action.payload.videos] : action.payload.videos,
                nextPageToken: action.payload.nextPageToken,
                activeCategory: action.payload.category,
                loading: false
            }

        case HOME_VIDEOS_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default: return state;
    }
}

export default VideosReducer
