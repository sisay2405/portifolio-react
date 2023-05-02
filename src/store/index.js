import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import headerReducer from './reducer';
import detailsReducer from './detailsSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    search: headerReducer,
    details: detailsReducer,
    header: headerReducer,
  },
});
