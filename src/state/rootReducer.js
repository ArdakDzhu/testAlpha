import {combineReducers} from "redux";
import {memesList} from "./cards/reducer";

const rootReducer = combineReducers({
    memesList: memesList,
})

export default rootReducer
