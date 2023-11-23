
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addCart, deleteCart } from "../redux/Slices/CartSlice"
import { toast } from "react-hot-toast";

const Product = ({ post }) => {
  const cart = useSelector((state) => state.cart)

  console.log("cart", cart)
  const dispatch = useDispatch()


  const AddtoCart = () => {
    dispatch(addCart(post));
    toast.success("Added")

  }
  const removeFromCart = () => {
    dispatch(deleteCart(post));
    toast.error("deleted")

  }

  return (


    <div className="border border-black flex flex-col items-center justify-between gap-3 p-4 mt-10 ml-5 rounded-xl sm:hover:scale-105   hover:scale-110 lg:hover:scale-110 transition duration-300 ease-in hover:shadow-[rgba(0, 0, 0, 0.4) 0px 30px 90px] lg:hover:shadow-[rgba(0, 0, 0, 0.4) 0px 30px 90px]">



      <div>
        <p className="font-bold text-gray-700 text-lg text-left truncate w-40 mt-1">{post.title.split(" ").slice(0, 3).join(" ") + "..."}</p>
      </div>

      <div className="w-40 text-gray-500 font-normal text-[10px] text-left">
        {post.description.split(" ").slice(0, 6).join(" ") + "..."}
      </div>

      <div className="h-[180px]">
        <img src={post.image} alt={post.title} className="w-full h-full" />
      </div>

      <div className="flex md:flex-row justify-evenly items-center sm:flex-col px-3">
        <div className="text-green-600 font-semibold">
          ${post.price}
        </div>

        <div>
          {cart.some((p) => p.id == post.id) ? (
            <button className="text-gray-700 border-3 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-800 hover:text-white" onClick={removeFromCart}>
              Remove Item
            </button>
          ) : (
            <button className="text-gray-700 border-3 border-gray-700 rounded-full font-semibold text-[12px] p-1 px-3 uppercase hover:bg-gray-800 hover:text-white" onClick={AddtoCart}>
              Add Item
            </button>
          )}
        </div>
      </div>
    </div>

  )
}


export default Product
