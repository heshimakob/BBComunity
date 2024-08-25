import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  chapterData: [],
  singleCours: {},
  singleChapter: {}
};

const coursSlice = createSlice({
  name: 'cours',
  initialState,
  reducers: {
    fetchCours(state, action) {
      state.data = action.payload
    },
    fetchChapter(state, action) {
      state.chapterData = action.payload
    },
    fetchSingleCours(state, action) {
      state.singleCours = action.payload
    },
    fetchSingleChapter(state, action) {
      state.singleChapter = action.payload
    },
    updateCours(state, action) {
      state.data = state.data.map(cours => cours._id === action.payload._id ? action.payload : cours)
    },
    deleteCours(state, action) {
      state.data = state.data.filter(cours => cours._id !== action.payload)
    },
    updateChapter(state, action) {
      state.chapterData = state.chapterData.map(chapter => chapter._id === action.payload._id ? action.payload : chapter)
    },
    addChapter(state, action) {
      state.chapterData.push(action.payload)
    }
  }
});

export const { fetchCours, fetchChapter, fetchSingleCours, fetchSingleChapter, updateCours, deleteCours, updateChapter, addChapter } = coursSlice.actions;
export default coursSlice.reducer;

export function getCours() {
  return async function getBlogsThunk(dispatch, getState) {
    const response = await axios.get("http://localhost:8080/api/cours/getAllCours")
    const result = response.data;
    dispatch(fetchCours(result));
  }
}

export function getChapterById(id) {
  return async function getChapterThunk(dispatch, getState) {
    const response = await axios.get(`http://localhost:8080/api/chapter/getChapterById/${id}`)
    const result = response.data;
    dispatch(fetchSingleChapter(result));
  }
}

export function updateCoursById(id, data) {
  return async function updateCoursThunk(dispatch, getState) {
    const response = await axios.put(`http://localhost:8080/api/cours/updateCours/${id}`, data)
    const result = response.data;
    dispatch(updateCours(result));
  }
}

export function deleteCoursById(id) {
  return async function deleteCoursThunk(dispatch, getState) {
    const response = await axios.delete(`http://localhost:8080/api/cours/deleteCours/${id}`)
    dispatch(deleteCours(id));
  }
}

export function updateChapterById(id, data) {
  return async function updateChapterThunk(dispatch, getState) {
    const response = await axios.put(`http://localhost:8080/api/chapter/updateChapter/${id}`, data)
    const result = response.data;
    dispatch(updateChapter(result));
  }
}

export function getAllChapterByCoursId(id) {
  return async function getAllChapterThunk(dispatch, getState) {
    const response = await axios.get(`http://localhost:8080/api/chapter/getAllChapterByCoursId/${id}`)
    const result = response.data;
    dispatch(fetchChapter(result));
  }
}

export function addChapterByCoursId(id, data) {
  return async function addChapterThunk(dispatch, getState) {
    const response = await axios.post(`http://localhost:8080/api/chapter/addChapter/${id}`, data)
    const result = response.data;
    dispatch(addChapter(result));
  }
}

export function getCoursById(id) {
  return async function getCoursThunk(dispatch, getState) {
    const response = await axios.get(`http://localhost:8080/api/cours/getCoursById/${id}`)
    const result = response.data;
    dispatch(fetchSingleCours(result));
  }
}