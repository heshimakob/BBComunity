import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";
import coursSlice from "./coursSlice";


const store  = configureStore({

    reducer:{

        blogs:blogSlice,
        cours:coursSlice,
        devTools:true,
    }
});

export   default  store; 