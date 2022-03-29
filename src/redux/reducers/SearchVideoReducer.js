import { SEARCHED_VIDEO_FAIL, SEARCHED_VIDEO_REQUEST, SEARCHED_VIDEO_SUCCESS } from "../actions/actionTypes"

const initialState = {
    loading: true,
    videos: [],
    nextPageToken : null
}

const SearchVideoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCHED_VIDEO_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SEARCHED_VIDEO_SUCCESS:
            console.log("action.payload.data",action.payload.data)
            return {
                ...state,
                videos: action.payload,
                loading: false,
            }
        case SEARCHED_VIDEO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state
    }
}

export default SearchVideoReducer