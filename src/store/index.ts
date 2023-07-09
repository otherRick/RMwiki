import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '../pages/Login/slice/homeSlice';
import { shopSlice } from '../pages/Shop/slice/shopSlice';
import { cartSlice } from '../pages/Cart/slice/cartSlice';

export const store = configureStore({
  reducer: {
    loginReducer: loginSlice.reducer,
    shopReducer: shopSlice.reducer,
    cartReducer: cartSlice.reducer
  }
});
