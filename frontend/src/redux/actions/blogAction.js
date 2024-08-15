import axios from 'axios';
export const getAllBlog=()=> async(dispatch)=>{
    dispatch({type:'GET_BLOG_REQUEST'});
    try {
        const res =  await axios.get('/api/blog/getAllBlog')
        console.log(res)
        dispatch({type:'GET_BLOG_SUCCESS', payload:res.data})
        
    } catch (err) {
        dispatch({type:'GET_BLOG_FAIL', payload:err})
        
    }
};

export const addBlog=(blog)=> async(dispatch)=>{
    dispatch({type:'ADD_BLOG_REQUEST'});
    try {
        const res =  await axios.post('/api/blog/addBlog',{blog})
    
        dispatch({type:'ADD_BLOG_SUCCESS'})
        console.log(res)
        
    } catch (err) {
        dispatch({type:'ADD_BLOG_FAIL', payload:err})
        
    }
};