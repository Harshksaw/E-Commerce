import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCart, deleteCart } from "../redux/Slices/CartSlice"
import  {toast} from "react-hot-toast";

const  Product =({post})=> {
    const cart = useSelector((state)=> state.cart)

    console.log("cart",cart)
    const dispatch = useDispatch()


    const AddtoCart =()=>{
        dispatch(addCart(post));
        toast.success("Added")

    }
    const removeFromCart=()=>{
        dispatch(deleteCart(post));
        toast.error("deleted")

    }

  return (
    <div className="flex flex-col item-center justify-between">

        <div>

            <p>{post.title.split(" ").slice(0,3).join(" ")+ "..."}</p>

        </div>
        <div className="">
            {post.description.split(" ").slice(0,10).join(" ")+ "..."}
        </div>
        <div className="size-10">
            <img src={post.image}  size = {20} />
        </div>
        <div>
            {post.price}
        </div>
        <div>
                {
                    cart.some((p)=> p.id == post.id) ?
                        (<button onClick={removeFromCart}> Remove Item</button>) :
                        (<button onClick={AddtoCart}> Addd Item</button>)
                    
                }


        </div>
      
    </div>
  )
}
export default Product