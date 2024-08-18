import {configureStore}  from "@reduxjs/toolkit"
import  rootReducer from "./reducers"
import { getAllBlog } from "./actions/blog.action";
import { getAllUser } from "./actions/user.action";


const store  =configureStore({
    reducer:rootReducer,
    devTools:true,

});

store.dispatch(getAllBlog())
store.dispatch(getAllUser())

export default store;
