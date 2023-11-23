import { createSlice } from '@reduxjs/toolkit'



export const cartSlice = createSlice({
  name: 'cart',
  initialState : [],

  reducers: {
    addCart: (state, action) => {
      state.push(action.payload)

  

    },
    deleteCart: (state,action) => {
      state.filter((item )=> item.id !== action.payload)
    },
   

   
    
  },
})

// Action creators are generated for each case reducer function
export const { addCart, deleteCart  } = cartSlice.actions

export default cartSlice.reducer