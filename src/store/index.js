import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import headerReducer from './reducer';

export default configureStore({
  reducer: {
    theme: themeReducer,
    search: headerReducer,
    header: headerReducer,
  },
});
