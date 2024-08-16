import axios from 'axios';



export const getAllBlog=()=> async(dispatch)=>{
    dispatch({type:'GET_BLOG_REQUEST'});
    try {
        const res =  await axios.get('http://localhost:8080/api/blog/getAllBlog')
        console.log(res)
        dispatch({type:'GET_BLOG_SUCCESS', payload:res.data})
        
    } catch (err) {
        dispatch({type:'GET_BLOG_FAIL', payload:err})
        
    }
};