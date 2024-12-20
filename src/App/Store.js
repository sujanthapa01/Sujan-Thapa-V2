// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

import themereducer from '../features/Theme/themeSlice';
 

export const store = configureStore({
  reducer: {
    theme: themereducer
  },
});
