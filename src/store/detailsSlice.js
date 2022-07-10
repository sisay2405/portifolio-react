import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const getDetails = createAsyncThunk(
  'details/getDetails',
  async (id) => {
    const res = await fetch(
      `https://bwreact-yelp-backend.herokuapp.com/api/businesses/${id}`,
    );
    return res.json();
  },
);

export const detailsSlice = createSlice({
  name: 'details',
  initialState: {
    loading: true,
    error: false,
    details: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getDetails.pending, (state) => {
        state.error = false;
        state.loading = true;
        state.details = {};
      })
      .addCase(getDetails.fulfilled, (state, { payload }) => {
        state.error = false;
        state.loading = false;
        state.details = payload;
      })
      .addCase(getDetails.rejected, (state) => {
        state.error = true;
        state.loading = false;
        state.details = {};
      });
  },
});

export default detailsSlice.reducer;
