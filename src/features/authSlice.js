import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const userFromStorage = JSON.parse(localStorage.getItem("user"));

export const login = createAsyncThunk("auth/login", async (data) => {
  
  // ✅ DEMO LOGIN (no backend needed)
  if (data.email === "admin@nss.com" && data.password === "admin123") {
    const user = {
      email: data.email,
      role: "admin",
      token: "demo-token",
    };

    localStorage.setItem("user", JSON.stringify(user));
    return user;
  }

  throw new Error("Invalid credentials");
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: userFromStorage || null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;