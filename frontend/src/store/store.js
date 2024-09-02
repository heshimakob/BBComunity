import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";
import coursSlice from "./coursSlice";
import userSlice from "./userSlice";
import eventSlice from "./eventSlice";
import companySlice from "./companySlice";
import candidateSlice from "./candidateSlice";


const store  = configureStore({

    reducer:{

        blogs:blogSlice,
        cours:coursSlice,
        users:userSlice,
        event:eventSlice,
        company:companySlice,
        candidate:candidateSlice,

        devTools:false,
    }
});

export   default  store; 