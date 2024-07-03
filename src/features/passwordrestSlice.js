import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for resetting password
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:7000/forget-password', { email });
      console,log(response.json())
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Slice for managing reset password state
const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState: {
    error: null,
    success: null,
    loading: false
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.success = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = "email sent";
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = "error";
        state.success = null;
      });
  }
});

export const { clearError, clearSuccess } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
