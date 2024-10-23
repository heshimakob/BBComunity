import { combineReducers, configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";
import coursSlice from "./coursSlice";
import userSlice from "./userSlice";
import eventSlice from "./eventSlice";
import companySlice from "./companySlice";
import candidateSlice from "./candidateSlice";
import {persistReducer} from "redux-persist"
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";


const rootReducer = combineReducers({

    blogs:blogSlice,
    cours:coursSlice,
    users:userSlice,
    event:eventSlice,
    company:companySlice,
    candidate:candidateSlice,

});


const persistConfig ={
    key:'root',
    storage,
    version:1,
};
const persistedReducer =persistReducer(persistConfig, rootReducer);

const store  = configureStore({

    reducer:persistedReducer,
    devTools:false,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({serializableCheck:false}),
});
 const  persistor= persistStore(store); 
export  {store,persistor}