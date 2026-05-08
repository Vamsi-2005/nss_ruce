import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getEvents } from "../services/eventService";

export const fetchEvents = createAsyncThunk(
  "events/fetch",
  async () => await getEvents()
);

const eventSlice = createSlice({
  name: "events",
  initialState: { list: [], loading: false },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (s) => { s.loading = true; })
      .addCase(fetchEvents.fulfilled, (s, a) => {
        s.loading = false;
        s.list = a.payload;
      });
  },
});

export default eventSlice.reducer;