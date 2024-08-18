import axios from 'axios';

export const POST_COMPANY = "POST_COMPANY";


export const addCompany = (data) => {
    //   return async (dispatch) => {
    //     try {
    //       const response = await axios.get("http://localhost:8080/api/users/getAllUser").then;
    
    //     //   console.log(response)
    //       dispatch({ type: GET_USER, payload: response.data[0]});
    //     } catch (error) {
    //       console.error(error);
    //       // You can also dispatch an error action here if you want
    //       // dispatch({ type: "ERROR", payload: error.message });
    //     }
    //   };
    return(dispatch)=>{
        return axios.get("http://localhost:8080/api/company/addCompany", data).then((res)=>{
            dispatch({type: POST_COMPANY, payload:data});
        });
    }
    };