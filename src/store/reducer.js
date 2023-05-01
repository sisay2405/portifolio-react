// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   expand: false,
//   navColor: false,
// };

// export const headerSlice = createSlice({
//   name: 'search',
//   initialState,
//   reducers: {
//     setNavColor(state, { payload }) {
//       state.expand = payload;
//     },
//     setExpanded(state, { payload }) {
//       state.navColor = payload;
//     },
//   },
// });

// export const { setNavColor, setExpanded } = headerSlice.actions;

// export default headerSlice.reducer;
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