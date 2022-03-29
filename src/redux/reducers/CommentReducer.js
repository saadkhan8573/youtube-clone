import { COMMENT_LIST_FAIL, COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS, CREATE_COMMENT_SUCCESS } from "../actions/actionTypes"

const initialState = {
    loading: true,
    comments: [],
}
const CommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case COMMENT_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case COMMENT_LIST_SUCCESS:
            return {
                ...state,
                comments: action.payload,
                loading: false,
            }
        case COMMENT_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case CREATE_COMMENT_SUCCESS:
            return {
                ...state,
                comments: [
                    action.payload,
                    ...state.comments,
                ]
            }
        default: return state
    }
}

export default CommentReducer;