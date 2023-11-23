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
    <div>
      {cart.length > 0 ? (
        <div>
          {/* Uncomment or remove the following code based on your needs */}
          {/* <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div> */}

          <div>
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
      ) : (
        <div className="">
          <h1>Your cart is empty</h1>
          <Link to="/">Go back</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
