import axios from 'axios';
export const getAllCandidate=()=> async(dispatch)=>{
    dispatch({type:'GET_CANDIDATE_REQUEST'});
    try {
        const res =  await axios.get('/api/pizzas/getAllPizzas')
        console.log(res)
        dispatch({type:'GET_CANDIDATE__SUCCESS', payload:res.data})
        
    } catch (err) {
        dispatch({type:'GET_CANDIDATE__FAIL', payload:err})
        
    }
};

export const addPizza=(pizza)=> async(dispatch)=>{
    dispatch({type:'ADD_CANDIDATE__REQUEST'});
    try {
        const res =  await axios.post('/api/pizzas/addpizza',{pizza})
    
        dispatch({type:'ADD_CANDIDATE__SUCCESS'})
        console.log(res)
        
    } catch (err) {
        dispatch({type:'ADD_CANDIDATE__FAIL', payload:err})
        
    }
};