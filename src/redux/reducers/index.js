import { combineReducers } from "redux";

import adminrReducer from "./adminrReducer";
import mainImages from "./mainImages";
import logoImage from "./logoImage";


export default combineReducers({
    admin: adminrReducer,
    mainImages: mainImages,
    logoImage: logoImage
})
