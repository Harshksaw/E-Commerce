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
      


    },
    updateCart: (state, action)=>{
      state.cartItems = state.cartItems.map((p)=>{
        if(p.id === action.payload.id){
            if(action.payload.key === "quantity"){
              p.attributes.price = p.oneQuantityPrice * action.payload.val;
            }
            return {...p, [action.payload.key]: action.payload.val } 
            
        }
        return p;
        
      })
    } 
  },
})


export const { addToCart , updateCart } = cartSlice.actions

export default cartSlice.reducer