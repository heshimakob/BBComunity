import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: []
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlog(state, action) {
      state.data.push(action.payload)
    },
    fetchBlog(state, action) {
      state.data = action.payload
    },
    updateBlog(state, action) {
      const index = state.data.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteBlog(state, action) {
      state.data = state.data.filter(item => item.id !== action.payload)
    }
  }
});

export const { addBlog, fetchBlog, deleteBlog, updateBlog } = blogSlice.actions;
export default blogSlice.reducer;

export function getBlogs() {
  return async function getBlogsThunk(dispatch, getState) {
    try {
      const response = await axios.get("http://localhost:8080/api/blogs/getAllBlog");
      const result = response.data;
      dispatch(fetchBlog(result));
    } catch (error) {
      console.error(error);
    }
  }
}

export function addBlogToDB(blog) {
  return async function addBlogToDBThunk(dispatch, getState) {
    try {
      const response = await axios.post("http://localhost:8080/api/blogs/addBlog", blog);
      dispatch(addBlog(response.data));
    } catch (error) {
      console.error(error);
    }
  }
}

export function updateBlogInDB(blog) {
  return async function updateBlogInDBThunk(dispatch, getState) {
    try {
      const response = await axios.put(`http://localhost:8080/api/blogs/updateBlog/${blog.id}`, blog);
      dispatch(updateBlog(response.data));
    } catch (error) {
      console.error(error);
    }
  }
}

export function deleteBlogFromDB(id) {
  return async function deleteBlogFromDBThunk(dispatch, getState) {
    try {
      await axios.delete(`http://localhost:8080/api/blogs/deleteBlog/${id}`);
      dispatch(deleteBlog(id));
    } catch (error) {
      console.error(error);
    }
  }
}