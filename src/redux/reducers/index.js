import { combineReducers } from "redux";

import adminrReducer from "./adminrReducer";

export default combineReducers({
    admin: adminrReducer,
})
