import { createSlice } from '@reduxjs/toolkit';

const headerSlice = createSlice({
  name: 'header',
  initialState: {
    expand: false,
    navColor: false
  },
  reducers: {
    setExpanded: (state, action) => {
      state.expand = action.payload;
    },
    setNavColor: (state, action) => {
      state.navColor = action.payload;
    }
  }
});

export const { setExpanded, setNavColor } = headerSlice.actions;

export default headerSlice.reducer;