import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    value: 'Sisay',
  },
  reducers: {
    toggleTheme(state, action) {
      state.value = state.value === 'sisay' ? 'portifolio' : 'sisay';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
