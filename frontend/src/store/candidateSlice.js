import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: []
};

const candidateSlice = createSlice({
  name: 'candidate',
  initialState,
  reducers: {
    addCandidate(state, action) {
      state.data.push(action.payload)
    },
    fetchCandidates(state, action) {
      state.data = action.payload
    },
    getCandidateById(state, action) {
      state.data = [action.payload];
    },
    updateCandidate(state, action) {
      const index = state.data.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteCandidate(state, action) {
      state.data = state.data.filter(item => item.id !== action.payload)
    }
  }
});

export const { addCandidate, fetchCandidates, deleteCandidate, updateCandidate, getCandidateById } = candidateSlice.actions;
export default candidateSlice.reducer;

export function getCandidates() {
  return async function getCandidatesThunk(dispatch, getState) {
    try {
      const response = await axios.get("http://localhost:8080/api/candidates/getAllCandidates");
      const result = response.data;
      dispatch(fetchCandidates(result));
    } catch (error) {
      console.error(error);
    }
  }
}

export function addCandidateToDB(candidate) {
  return async function addCandidateToDBThunk(dispatch, getState) {
    try {
      const response = await axios.post("http://localhost:8080/api/candidates/addCandidate", candidate);
      dispatch(addCandidate(response.data));
    } catch (error) {
      console.error(error);
    }
  }
}

export function updateCandidateInDB(candidate) {
  return async function updateCandidateInDBThunk(dispatch, getState) {
    try {
      const response = await axios.put(`http://localhost:8080/api/candidates/updateCandidate/${candidate.id}`, candidate);
      dispatch(updateCandidate(response.data));
    } catch (error) {
      console.error(error);
    }
  }
}

export function deleteCandidateFromDB(id) {
  return async function deleteCandidateFromDBThunk(dispatch, getState) {
    try {
      await axios.delete(`http://localhost:8080/api/candidates/deleteCandidate/${id}`);
      dispatch(deleteCandidate(id));
    } catch (error) {
      console.error(error);
    }
  }
}

export function getCandidateByIdDb(id) {
  return async function getCandidateByIdThunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:8080/api/candidates/getCandidateById/${id}`);
      const result = response.data;
      dispatch(fetchCandidates([result])); // on passe un tableau avec un seul élément
    } catch (error) {
      console.error(error);
    }
  }
}