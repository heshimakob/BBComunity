import axios from 'axios';

export const addCours =(user)=>async dispatch=>{
dispatch({type:'A_REGISTER_REQUEST'})
try {
    
    const res= await axios.post('/api/cours/addcours',user)
    console.log(res)
    dispatch ({type:'USER_REGISTER_SUCCESS'})
} catch (error) {
    dispatch ({type:'USER_REGISTER_FAIL', payload:error})
    
}


};