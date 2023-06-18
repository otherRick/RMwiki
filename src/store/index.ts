import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '../pages/Login/slice/homeSlice';

export const store = configureStore({
  reducer: {
    loginReducer: loginSlice.reducer
  }
});
