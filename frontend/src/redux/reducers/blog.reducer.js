import { GET_BLOGS, POST_BLOG } from "../actions/blog.action";


const initialState={

};


export default function blogReducer(state=initialState, action){

    switch(action.type){
        case GET_BLOGS:
            return action.payload;
        case POST_BLOG:
            return [action.payload, ...state]
            default:
                return state;

    }
    
 
}