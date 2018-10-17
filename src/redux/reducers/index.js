import { combineReducers } from "redux";

import adminrReducer from "./adminrReducer";
import sliderReducer from "./sliderReducer";


export default combineReducers({
    admin: adminrReducer,
    slider: sliderReducer
})
