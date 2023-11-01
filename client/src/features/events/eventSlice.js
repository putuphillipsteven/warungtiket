import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    eventName: "Pesta Pora 1",
    date: "2023-10-11T14:53",
    province: "halo",
    city: "halo",
    address: "Yogyakarta",
    price: "0",
    eventDescription: "Lorem ipsum",
  },
  {
    id: 2,
    eventName: "Pesta Pora 2",
    date: "2023-10-11T14:53",
    province: "Jambi",
    city: "Jambi",
    address: "GOR Kotabaru",
    price: "50000",
    eventDescription: "Lorem ipsum",
  },
  {
    id: 3,
    eventName: "Pesta Pora 3",
    date: "2023-10-11T14:53",
    province: "D.I.Yogyakarta",
    city: "Sleman",
    address: "Pacific Building",
    price: "300000",
    eventDescription: "Lorem ipsum",
  },
  {
    id: 4,
    eventName: "Pesta Pora 4",
    date: "2023-10-11T14:53",
    province: "Jawa Tengah",
    city: "Solo",
    address: "Rumah Sam",
    price: "50000",
    eventDescription: "Lorem ipsum",
  },
  {
    id: 5,
    eventName: "Pesta Pora 5",
    date: "2023-10-11T14:53",
    province: "Sulawesi Selatan",
    city: "Makassar",
    address: "Rumah Asrar",
    price: "50000",
    eventDescription: "Lorem ipsum",
  },
  {
    id: 6,
    eventName: "Pesta Pora 6",
    date: "2023-10-11T14:53",
    province: "Sumatra Barat",
    city: "Padang",
    address: "Stadion Haji Agus Salim",
    price: "50000",
    eventDescription: "Lorem ipsum",
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
