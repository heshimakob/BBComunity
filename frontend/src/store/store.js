import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice";
import coursSlice from "./coursSlice";
import userSlice from "./userSlice";


const store  = configureStore({

    reducer:{

        blogs:blogSlice,
        cours:coursSlice,
        users:userSlice,
        devTools:true,
    }
});

export   default  store; 