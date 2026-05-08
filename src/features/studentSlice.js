import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStudents } from "../services/studentService";

export const fetchStudents = createAsyncThunk(
  "students/fetch",
  async () => await getStudents()
);

const studentSlice = createSlice({
  name: "students",
  initialState: {
    list: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStudents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      });
  },
});

export default studentSlice.reducer;