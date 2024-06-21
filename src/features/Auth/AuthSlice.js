// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for login
export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:7000/login', { email, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    error: null,
    success: null,
    isLogin: false,
    token: null,
    loading: false,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = null;
    },
    logout : (state) => {
      state.token = null;
      state.isLogin = false;
      localStorage.removeItem('token');
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = 'invalid  username or password ';
        state.isLogin = false;
        state.loading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.success = 'Login Success';
        state.isLogin = true;
        state.token = action.payload.token;
        state.loading = false;
        localStorage.setItem('token', action.payload.token);
      });
  },
});

export const { clearError, clearSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
