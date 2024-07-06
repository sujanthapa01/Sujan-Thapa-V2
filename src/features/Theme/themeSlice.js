import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: localStorage.getItem('theme') || 'light'
    },
    reducers: {
        toogleTheme: (state) => {
            const newTheme = state.theme === 'light' ? 'dark' : 'light';
            state.theme = newTheme;
            localStorage.setItem('theme', newTheme)
        },
    },
});

export const {toogleTheme} = themeSlice.actions;
export default themeSlice.reducer;