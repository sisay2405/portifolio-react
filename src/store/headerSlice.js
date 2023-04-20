import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expand: false,
  navColor: false,
};

export const headerSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setNavColor(state, { payload }) {
      state.expand = payload;
    },
    setExpanded(state, { payload }) {
      state.navColor = payload;
    },
  },
});

export const { setNavColor, setExpanded } = headerSlice.actions;

export default headerSlice.reducer;
