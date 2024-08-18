import { POST_COMPANY } from "../actions/company.action";


const initialState={

};


export default function companyReducer(state=initialState, action){

    switch(action.type){
        case POST_COMPANY:
            return action.payload;
            default:
                return state;

    }
    
 
};


