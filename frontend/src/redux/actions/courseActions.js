import axios from 'axios';

export const addCours =(user)=>async dispatch=>{
dispatch({type:'ADD_COURS_REQUEST'})
try {
    
    const res= await axios.post('/api/cours/addcours',user)
    console.log(res)
    dispatch ({type:'ADD_COURS_SUCCESS'})
} catch (error) {
    dispatch ({type:'ADD_COURS_FAIL', payload:error})
    
}


};