import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../features/events/eventSlice";

export const store = configureStore({
  reducer: {
    events: eventReducer,
  },
});
