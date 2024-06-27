import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/AuthSlice";
import signupAuthReducer from "../features/SignupAuth/SignupSlice"; // Ensure this path is correct

export const store = configureStore({
  reducer: {
    auth: authReducer,
    signupAuth: signupAuthReducer, // Added signup reducer
  }
});
