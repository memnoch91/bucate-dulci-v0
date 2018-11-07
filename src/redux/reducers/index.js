import { combineReducers } from "redux";

import adminrReducer from "./adminrReducer";
import mainImages from "./mainImages";
import logoImage from "./logoImage";
import portfolioImages from "./portfolioReducer";


export default combineReducers({
    admin: adminrReducer,
    mainImages: mainImages,
    logoImage: logoImage,
    portfolioImages: portfolioImages
});
