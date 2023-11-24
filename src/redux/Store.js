import { configureStore } from '@reduxjs/toolkit'

import  {cartSlice } from './Slices/CartSlice';
import { counterSlice } from './Slices/CounterSlice';



export const store = configureStore({
  reducer: {

    cart : cartSlice.reducer,
    counter: counterSlice.reducer,
    
  },
})