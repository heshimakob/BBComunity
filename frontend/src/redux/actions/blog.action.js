import axios from 'axios';

export const GET_BLOGS = "GET_BLOGS";

export const getAllBlogs = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8080/api/blogs/getAllBlog");

    //   console.log(response)
      dispatch({ type: GET_BLOGS, payload: response.data });
    } catch (error) {
      console.error(error);
      // You can also dispatch an error action here if you want
      // dispatch({ type: "ERROR", payload: error.message });
    }
  };
};