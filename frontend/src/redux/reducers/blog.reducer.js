import { GET_BLOGS } from "../actions/blog.action";


const initialState={

};


export default function blogReducer(state=initialState, action){

    switch(action.type){
        case 'GET_BLOGS':
            return action.payload;
            default:
                return state;

    }
    
 
}