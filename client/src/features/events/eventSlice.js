import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "Event 1",
    category: "Kuliner",
    location: "Jogja",
    status: "Free",
    date: "01-01-2023",
  },
  {
    id: 2,
    title: "Event 2",
    category: "Musik",
    location: "Malang",
    status: "Paid",
    date: "01-01-2023",
  },
  {
    id: 3,
    title: "Event 3",
    category: "Olahraga",
    location: "Jakarta",
    status: "Free",
    date: "01-01-2023",
  },
  {
    id: 4,
    title: "Event 4",
    category: "Kebudayaan",
    location: "Solo",
    status: "Paid",
    date: "01-01-2023",
  },
  {
    id: 5,
    title: "Event 5",
    category: "Komedi",
    location: "Bekasi",
    status: "Free",
    date: "01-01-2023",
  },
  {
    id: 6,
    title: "Event 6",
    category: "Webinar",
    location: "Bandung",
    status: "Free",
    date: "01-01-2023",
  },
];

const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    eventUpdated(state, action) {
      const { id, title, category, location, status, date } = action.payload;
      const existingEvent = state.find((post) => post.id === id);
      if (existingEvent) {
        existingEvent.title = title;
        existingEvent.category = category;
        existingEvent.location = location;
        existingEvent.status = status;
        existingEvent.date = date;
      }
    },
  },
});

export const { eventUpdatedUpdated } = eventSlice.actions;

export default eventSlice.reducer;
