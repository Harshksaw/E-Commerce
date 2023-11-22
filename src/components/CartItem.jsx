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
        <div>
            <div>
                <img src={item.image} alt="" />
            </div>

            <div>
                <h1>{item.name}</h1>
                <p>{item.description} </p>
                <p>{item.price} </p>
            <div onClick={removeFromCart}>

                    <FcDeleteDatabase/>
            </div>


                

            </div>


        </div>
    )
    
}
export default CartItem;