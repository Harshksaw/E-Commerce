import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import Link component
import CartItem from "../components/CartItem";

const Cart = () => {
  const  cart = useSelector((state) => state.cart);

  const [totalamount, setTotalamount] = useState(0);

  useEffect(() => {
    setTotalamount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (

    <div className="container mx-auto mt-8">
      {cart.length > 0 ? (

        
          <div className="flex  flex-col items-center justify-center mx-11 max-h-[60vh] overflow-y-auto">
          {cart.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} index={cartItem.id}/>
            
          ))}

        </div>

        
    



      ) : (
        // If not available
        <div className="flex items-center justify-center mt-16">
          <div className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-2xl font-semibold mb-4">NO ITEMS </h1>
            <p className="text-gray-600 mb-4">
              Add items , Shop form the Store
            </p>
            <Link to="/">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">
                Go Back
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>


  );
};

export default Cart;
