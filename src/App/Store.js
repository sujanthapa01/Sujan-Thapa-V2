import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth/AuthSlice";
import signupAuthReducer from "../features/SignupAuth/SignupSlice";
import passwordResetReducer from "../features/passwordrestSlice";
import themereducer from "../features/Theme/themeSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    signupAuth: signupAuthReducer,
    resetPassword: passwordResetReducer,
    theme : themereducer,
  }
});
