import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState : [],

  reducers: {
    addCart: (state) => {
  
      state.value += 1
    },
    deleteCart: (state) => {
      state.value -= 1
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addCart, deleteCart } = cartSlice.actions

export default cartSlice.reducer