import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "../features/events/eventSlice";
import loginReducer from "../features/login/loginSlice";

export const store = configureStore({
  reducer: {
    events: eventReducer,
    login: loginReducer,
  },
});
