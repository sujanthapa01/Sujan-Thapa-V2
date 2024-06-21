import { configureStore } from "@reduxjs/toolkit";
import  handleLogin  from "../features/Auth/AuthSlice";

export const store = configureStore({
    reducer: {
      auth: handleLogin,
    }
  });