import axios from 'axios';

export const GET_USERS = "GET_USERS";

export const getAllUser = () => {
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
    return axios.get("http://localhost:8080/api/users/getAllUser").then((res)=>{
        dispatch({type: GET_USERS, payload:res.data[0]});
    });
}
};