import  { createSlice } from '@reduxjs/toolkit';

const initialState = {
  load: true,
};

export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoad(state, { payload }) {
      state.load = payload;
    },
  },
});

export const { setLoad } = loaderSlice.actions;

export default loaderSlice.reducer;
