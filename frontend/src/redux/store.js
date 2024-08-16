import {configureStore}  from "@reduxjs/toolkit"
import  rootReducer from "./reducers"
import { getAllBlog } from "./actions/blog.action";


const store  =configureStore({
    reducer:rootReducer,
    devTools:true,

});

store.dispatch(getAllBlog)

export default store;
