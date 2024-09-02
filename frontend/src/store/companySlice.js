import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: []
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    addCompany(state, action) {
      state.data.push(action.payload)
    },
    fetchCompanies(state, action) {
      state.data = action.payload
    },
    getCompanyById(state, action) {
      state.data = [action.payload];
    },
    updateCompany(state, action) {
      const index = state.data.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteCompany(state, action) {
      state.data = state.data.filter(item => item.id !== action.payload)
    }
  }
});

export const { addCompany, fetchCompanies, deleteCompany, updateCompany, getCompanyById } = companySlice.actions;
export default companySlice.reducer;

export function getCompanies() {
  return async function getCompaniesThunk(dispatch, getState) {
    try {
      const response = await axios.get("http://localhost:8080/api/companies/getAllCompanies");
      const result = response.data;
      dispatch(fetchCompanies(result));
    } catch (error) {
      console.error(error);
    }
  }
}

export function addCompanyToDB(data) {
  return async function addCompanyToDBThunk(dispatch, getState) {
    try {
      const response = await axios.post("http://localhost:8080/api/company/addCompany", data);
      dispatch(addCompany(response.data));
    } catch (error) {
      console.error(error);
    }
  }
}

export function updateCompanyInDB(company) {
  return async function updateCompanyInDBThunk(dispatch, getState) {
    try {
      const response = await axios.put(`http://localhost:8080/api/companies/updateCompany/${company.id}`, company);
      dispatch(updateCompany(response.data));
    } catch (error) {
      console.error(error);
    }
  }
}

export function deleteCompanyFromDB(id) {
  return async function deleteCompanyFromDBThunk(dispatch, getState) {
    try {
      await axios.delete(`http://localhost:8080/api/companies/deleteCompany/${id}`);
      dispatch(deleteCompany(id));
    } catch (error) {
      console.error(error);
    }
  }
}

export function getCompanyByIdDb(id) {
  return async function getCompanyByIdThunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:8080/api/companies/getCompanyById/${id}`);
      const result = response.data;
      dispatch(fetchCompanies([result])); // on passe un tableau avec un seul élément
    } catch (error) {
      console.error(error);
    }
  }
}