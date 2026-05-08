import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDonors } from "../services/donorService";

export const fetchDonors = createAsyncThunk(
  "donors/fetch",
  async () => await getDonors()
);

const slice = createSlice({
  name: "donors",
  initialState: { list: [], loading: false },
  extraReducers: (b) => {
    b.addCase(fetchDonors.fulfilled, (s, a) => {
      s.list = a.payload;
    });
  },
});

export default slice.reducer;