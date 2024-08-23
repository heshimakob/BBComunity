import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store.js'




// Reducx store 

// import {configureStore}  from "@reduxjs/toolkit"
// import  rootReducer from "../src/redux/reducers"
// import { getAllBlogs } from "../src/redux/actions/blog.action.js";


// const store  =configureStore({
//     reducer:rootReducer,
//     devTools:true,

// });

// store.dispatch(getAllBlogs())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
