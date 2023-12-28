import cartSlice from './slices/cartSlice'
import {configureStore} from '@reduxjs/toolkit'
export const store = configureStore({
  reducer: {
    cart: cartSlice
  },
  devTools: true
})