import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  colorIndex: 0,
};

const colorSlice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    setColorIndex: (state, action) => {
      state.colorIndex = action.payload;
    },
  },
});

export const { setColorIndex } = colorSlice.actions;
export default colorSlice.reducer;
