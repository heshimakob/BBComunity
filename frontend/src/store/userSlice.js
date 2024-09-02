import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  singleUser: {},
  error: null,
  isLoggedIn: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUsers(state, action) {
      state.users = action.payload
      console.log(action.payload)
    },
    fetchSingleUser(state, action) {
      state.singleUser = action.payload
    },
    registerUser(state, action) {
      state.users.push(action.payload)
    },
    deleteUser(state, action) {
      state.users = state.users.filter(user => user._id !== action.payload)
    },
    updateUser(state, action) {
      state.users = state.users.map(user => user._id === action.payload._id ? action.payload : user)
    },
    signinUser(state, action) {
      state.isLoggedIn = true
      state.singleUser = action.payload
    },
    signoutUser(state) {
      state.isLoggedIn = false
      state.singleUser = {}
    },
    setError(state, action) {
      state.error = action.payload
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    }
  }


  
});

export const { fetchUsers, fetchSingleUser, registerUser, deleteUser, updateUser, signinUser, signoutUser, setError } = userSlice.actions;
export default userSlice.reducer;

export function signin(data) {
  return async function signinThunk(dispatch, getState) {
    try {
      const response = await axios.post("http://localhost:8080/api/user/signin", data)
      const result = response.data;
      dispatch(signinUser(result));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}

export function register(data) {
  return async function registerThunk(dispatch, getState) {
    try {
      const response = await axios.post("http://localhost:8080/api/users/register", data)
      const result = response.data;
      dispatch(registerUser(result));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}


export function getUsers() {
  return async function getUsersThunk(dispatch, getState) {
    try {
      const response = await axios.get("http://localhost:8080/api/users/getAllUsers")
      const result = response.data;
      dispatch(fetchUsers(result));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}

export function getUserById(id) {
  return async function getUserThunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:8080/api/user/getUserById/${id}`)
      const result = response.data;
      dispatch(fetchSingleUser(result));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}

export function updateUserById(id, data) {
  return async function updateUserThunk(dispatch, getState) {
    try {
      const response = await axios.put(`http://localhost:8080/api/user/updateUser/${id}`, data)
      const result = response.data;
      dispatch(updateUser(result));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}

export function deleteUserById(id) {
  return async function deleteUserThunk(dispatch, getState) {
    try {
      const response = await axios.delete(`http://localhost:8080/api/user/deleteUser/${id}`)
      dispatch(deleteUser(id));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}