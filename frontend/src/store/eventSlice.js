import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: []
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    addEvent(state, action) {
      state.data.push(action.payload)
    },
    fetchEvents(state, action) {
      state.data = action.payload
    },
    getEventById(state, action) {
      state.data = [action.payload];
    },
    updateEvent(state, action) {
      const index = state.data.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    },
    deleteEvent(state, action) {
      state.data = state.data.filter(item => item.id !== action.payload)
    }
  }
});

export const { addEvent, fetchEvents, deleteEvent, updateEvent, getEventById } = eventSlice.actions;
export default eventSlice.reducer;

export function getEvents() {
  return async function getEventsThunk(dispatch, getState) {
    try {
      const response = await axios.get("http://localhost:8080/api/events/getAllEvents");
      const result = response.data;
      dispatch(fetchEvents(result));
    } catch (error) {
      console.error(error);
    }
  }
}

export function addEventToDB(event) {
  return async function addEventToDBThunk(dispatch, getState) {
    try {
      const response = await axios.post("http://localhost:8080/api/events/addEvent", event);
      dispatch(addEvent(response.data));
    } catch (error) {
      console.error(error);
    }
  }
}

export function updateEventInDB(event) {
  return async function updateEventInDBThunk(dispatch, getState) {
    try {
      const response = await axios.put(`http://localhost:8080/api/events/updateEvent/${event.id}`, event);
      dispatch(updateEvent(response.data));
    } catch (error) {
      console.error(error);
    }
  }
}

export function deleteEventFromDB(id) {
  return async function deleteEventFromDBThunk(dispatch, getState) {
    try {
      await axios.delete(`http://localhost:8080/api/events/deleteEvent/${id}`);
      dispatch(deleteEvent(id));
    } catch (error) {
      console.error(error);
    }
  }
}

export function getEventByIdDb(id) {
  return async function getEventByIdThunk(dispatch, getState) {
    try {
      const response = await axios.get(`http://localhost:8080/api/events/getEventById/${id}`);
      const result = response.data;
      dispatch(fetchEvents([result])); // on passe un tableau avec un seul élément
    } catch (error) {
      console.error(error);
    }
  }
}