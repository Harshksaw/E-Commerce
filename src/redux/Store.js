import { configureStore } from '@reduxjs/toolkit'

import  {cartSlice } from './Slices/CartSlice';



export const store = configureStore({
  reducer: {

    cart : cartSlice.reducer,
    
  },
})