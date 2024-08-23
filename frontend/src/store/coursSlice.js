import { createSlice } from "@reduxjs/toolkit";

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
    const data = await fetch("http://localhost:8080/api/cours/getAllCours")
    const result = await data.json();
    dispatch(fetchCours(result));
  }
}

export function getChapterById(id) {
  return async function getChapterThunk(dispatch, getState) {
    const data = await fetch(`http://localhost:8080/api/chapter/getChapterById/${id}`)
    const result = await data.json();
    dispatch(fetchSingleChapter(result));
  }
}

export function updateCoursById(id, data) {
  return async function updateCoursThunk(dispatch, getState) {
    const response = await fetch(`http://localhost:8080/api/cours/updateCours/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const result = await response.json();
    dispatch(updateCours(result));
  }
}

export function deleteCoursById(id) {
  return async function deleteCoursThunk(dispatch, getState) {
    const response = await fetch(`http://localhost:8080/api/cours/deleteCours/${id}`, {
      method: 'DELETE'
    })
    const result = await response.json();
    dispatch(deleteCours(id));
  }
}

export function updateChapterById(id, data) {
  return async function updateChapterThunk(dispatch, getState) {
    const response = await fetch(`http://localhost:8080/api/chapter/updateChapter/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const result = await response.json();
    dispatch(updateChapter(result));
  }
}

export function getAllChapterByCoursId(id) {
  return async function getAllChapterThunk(dispatch, getState) {
    const data = await fetch(`http://localhost:8080/api/chapter/getAllChapterByCoursId/${id}`)
    const result = await data.json();
    dispatch(fetchChapter(result));
  }
}

export function addChapterByCoursId(id, data) {
  return async function addChapterThunk(dispatch, getState) {
    const response = await fetch(`http://localhost:8080/api/chapter/addChapter/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    const result = await response.json();
    dispatch(addChapter(result));
  }
}

export function getCoursById(id) {
  return async function getCoursThunk(dispatch, getState) {
    const data = await fetch(`http://localhost:8080/api/cours/getCoursById/${id}`)
    const result = await data.json();
    dispatch(fetchSingleCours(result));
  }
}