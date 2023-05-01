import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import headerReducer from './reducer';
import detailsReducer from './detailsSlice';
import loaderReducer from './loadSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
    search: headerReducer,
    details: detailsReducer,
    loader: loaderReducer,
    header: headerReducer,
  },
});
