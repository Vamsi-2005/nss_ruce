import { configureStore } from "@reduxjs/toolkit";

// Import slices
import authReducer from "../features/authSlice";
import studentReducer from "../features/studentSlice";
import eventReducer from "../features/eventSlice";
import galleryReducer from "../features/gallerySlice";
import donorReducer from "../features/donorSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    students: studentReducer,
    events: eventReducer,
    gallery: galleryReducer,
    donors: donorReducer,
  },
});

export default store;