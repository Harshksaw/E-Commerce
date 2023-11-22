import { Link } from "react-router-dom";
import {FcDeleteDatabase} from "react-icons/Fc"
export default function CartItem({item , itemIndex}) {
    return (
        <div>
            <div>
                <img src={item.image} alt="" />
            </div>

            <div>
                <h1>{item.name}</h1>
                <p>{item.description} </p>
                <p>{item.price} </p>
                <Link to="/delete">
                    <FcDeleteDatabase/>



                
                </Link>
            </div>


        </div>
    )
    
}