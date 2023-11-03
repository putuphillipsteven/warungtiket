import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  events: [],
  status: "idle",
  error: null,
};

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEvents.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.events = state.events.concat(action.payload);
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  try {
    const res = await axios.get("http://localhost:8000/event");
    console.log(res);
    return res?.data?.data;
  } catch (err) {
    throw err;
  }
});

export const {} = eventSlice.actions;

export const selectAllEvents = (state) => state.events.events;

export default eventSlice.reducer;
