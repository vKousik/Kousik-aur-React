import { createSlice } from '@reduxjs/toolkit';
const loadTheme = () => {
  try {
    return localStorage.getItem('theme') || 'light';
  } catch {
    return 'light';
  }
};

const initialState = {
  mode: loadTheme()
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state,actions) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', state.mode);
    },
  }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;