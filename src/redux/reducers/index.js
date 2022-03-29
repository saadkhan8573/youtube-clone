import { combineReducers } from "redux";
import authReducer from "./authReducer";
import VideosReducer from "./VideosReducer";
import SelectedVideoReducer from "./SelectedVideoReducer";
import ChannelReducer from "./ChannelReducer";
import CommentReducer from "./CommentReducer";
import relatedVideo from "./relatedVideo";
import SearchVideoReducer from "./SearchVideoReducer";
import SubscriptionChannelReducer from "./SubscriptionChannelReducer";
import ChennelDataReducer from "./ChennelDataReducer";

const rootReducer = combineReducers({
    authReducer,
    VideosReducer,
    SelectedVideoReducer,
    ChannelReducer,
    CommentReducer,
    relatedVideo,
    SearchVideoReducer,
    SubscriptionChannelReducer,
    ChennelDataReducer
})

export default rootReducer;