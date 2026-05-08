import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getGallery } from "../services/galleryService";

export const fetchGallery = createAsyncThunk(
  "gallery/fetch",
  async () => await getGallery()
);

const slice = createSlice({
  name: "gallery",
  initialState: { list: [], loading: false },
  extraReducers: (b) => {
    b.addCase(fetchGallery.fulfilled, (s, a) => {
      s.list = a.payload;
    });
  },
});

export default slice.reducer;