import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cart',
  initialState :  {
    cartItems:[]
},
  reducers: {
    addToCart: (state, action)=>{
        const item = state.cartItems.find((p)=> p.id === action.payload.id)
        if(item){
          item.quantity++;
          item.attributes.price = item.oneQuantityPrice * item.quantity 
        }else{

          state.cartItems.push({...action.payload , quantity : 1})
        }
      


    }
 
  },
})


export const { addToCart } = cartSlice.actions

export default cartSlice.reducer