import { Link } from "react-router-dom";
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { deleteCart } from "../redux/Slices/CartSlice";

const  CartItem=({item}) =>{

    const dispatch = useDispatch()

    const removeFromCart = ()=>{

        dispatch(deleteCart(item.id))
    }
    return (
        <div className="border outline-black flex flex-row ">
            <div className="h-[100px]">
                <img src={item.image} alt={item.name} className="w-full h-full" />
            </div>

            <div>
                <h1 className="font-bold text-gray-700 text-lg text-left truncate w-40 mt-1">{item.name}</h1>
                <p className="w-40 text-gray-500 font-normal text-[10px] text-left">{item.description} </p>
                <p className="text-green-600 font-semibold">{item.price} </p>
                <div onClick={removeFromCart}>

                    <FcDeleteDatabase/>
                </div>


                

            </div>


        </div>
    )
    
}
export default CartItem;