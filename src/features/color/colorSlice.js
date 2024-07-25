// features/color/colorSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userColors: {} // Store colors by user ID
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColorForUser: (state, action) => {
      const { userId, colorIndex } = action.payload;
      state.userColors[userId] = colorIndex;
    }
  }
});

export const { setColorForUser } = colorSlice.actions;

export default colorSlice.reducer;
