import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// const url = 'http://localhost:7000/forget-password';
// Async thunk for resetting password
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ email }, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:7000/forget-password", { email });
      const data = response.json()
      console.log(data);
      return data; 
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState: {
    error: null,
    success: null,
    loading: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = "invalid email";
        state.success = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = "email sent";
      });
  }
});

export const {error, success, loading, data} = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
