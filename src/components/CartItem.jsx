import { Link } from "react-router-dom";
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { deleteCart } from "../redux/Slices/CartSlice";

const  item=({item}) =>{

    const dispatch = useDispatch()

    const removeFromCart = ()=>{

        dispatch(deleteCart(item.id))
    }
    return (
        
        <div className="grid grid-cols-3 gap-4 border-t py-4" key={item.id}>
                    <div className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                      <div>
                        <h3 className="font-semibold">{item.id}</h3>
                        <p className="text-gray-500">{item.description}</p>
                        <button
                        //   onClick={() => handleRemoveFromCart(item)}
                          className="text-gray-500 hover:text-black focus:outline-none"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="text-center">${item.price}</div>
                    <div className="flex items-center">
                      <button
                        // onClick={() => handleDecreaseCart(item)}
                        className="bg-gray-200 text-gray-600 px-2 py-1 rounded-l"
                      >
                        -
                      </button>
                      {/* <div className="px-4">{item.cartQuantity}</div> */}
                      <button
                        // onClick={() => handleAddToCart(item)}
                        className="bg-gray-200 text-gray-600 px-2 py-1 rounded-r"
                      >
                        +
                      </button>
                    </div>
                    {/* <div className="text-right">${item.price * item.cartQuantity}</div> */}
                  </div>
    )
    
}
export default item;