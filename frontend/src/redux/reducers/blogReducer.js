export const addBlogReducer=(state={ },action)=>{
    switch(action.type){
        case 'ADD_BLOG_REQUEST':
            return{
                ...state,
                loading:true
            }
            case 'ADD_BLOG_SUCCESS':
                return{
                    success:true,
                    loading:false
                }
                case 'ADD_BLOG_FAIL':
                    return{
                        error:action.payload,
                        loading:false
                    }
                    default:return state
    }
};