import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems:[]
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addToCart: (state, actions)=>{
        state.cartItems += action.payload;

    }
  },
})


export const { addToCart } = cartSlice.actions

export default cartSlice.reducer