import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import blogReducer from "./blog.reducer";
import companyReducer from "./company.reducer";

export default combineReducers({

    userReducer,
    blogReducer,
    companyReducer
    

});