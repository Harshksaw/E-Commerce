import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import Link component
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log(cart.length); // Corrected typo
  const [totalamount, setTotalamount] = useState(0);

  useEffect(() => {
    setTotalamount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex flex-col h-screen">
      {cart.length > 0 ? (
        
        <div className="border border-black mt-5 p-2 flex flex-row ">

            <div className="w-1/2 ml-20 outline-black  overflow-y-auto max-h-80 min-h-60">

              {cart.map((item, index) => {
                return <CartItem key={item.id} item={item} itemIndex={index} />;
              })}



            </div>

            <div className="w-1/3 outline-black mr-5">
              {/* "Summary" section */}
              <div className="mb-2">
                <div>Your cart</div>
                <div>Summary</div>
                <p>{cart.length}</p>
              </div>
              <div>
                <p>Total Length: {cart.length}</p>
                <p>Total amount: {totalamount}</p>
                <button>Checkout now</button>
              </div>

          </div>
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
