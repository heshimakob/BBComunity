import {createSlice} from "@reduxjs/toolkit";

const initialState ={
    data:[],
};


const coursSlice  =createSlice({

        name: 'cours',
        initialState,
        reducers:{
            fetchCours(state,action){
                state.data= action.payload
            },
        
        }
});

export const {fetchCours}= coursSlice.actions;
export default  coursSlice.reducer;


export   function  getCours(){

    return async function  getBlogsThunk (dispatch,getState){

        const data = await fetch ("http://localhost:8080/api/cours/getAllCours")
        const result= data.json();
        dispatch(fetchCours(result));
        
    }
}