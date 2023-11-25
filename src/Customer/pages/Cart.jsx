import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; // Import Link component
import CartItem from "../components/CartItem";
import Navbar from "../components/navbar/Navbar";


const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const [totalamount, setTotalamount] = useState(0);

  useEffect(() => {
    setTotalamount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  const shippingcost = (totalamount * 0.12).toFixed(2)
  const tax = (totalamount * 0.18).toFixed(1)
  let tot = parseInt(totalamount, 10)  + parseInt( tax, 10) + parseInt( shippingcost, 10)
  const total = tot

  return (
    <>
    {/* <Navbar/> */}
    <Navbar/>
 

      <div>
        {cart.length>0 ? (

        
 
            <div className="w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                    <div className="flex md:flex-row flex-col justify-end" id="cart">
                        <div className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                            <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" onClick={() => setShow(!show)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                                <p className="text-sm pl-2 leading-none">Back</p>

                            </div>
                            <p className="text-5xl font-black leading-10 text-gray-800 pt-3">Items</p>   

                            {cart.map((cartItem) => (
                                    <CartItem key={cartItem.id} item={cartItem} index={cartItem.id}/>
            
                                       ))}
                            
                            </div>


                           
                        <div className="xl:w-1/2 md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                            <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                <div>
                                    <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                    <div className="flex items-center justify-between pt-16">
                                        <p className="text-base leading-none text-gray-800">Subtotal</p>
                                        <p className="text-base leading-none text-gray-800">{totalamount}</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-base leading-none text-gray-800">Shipping</p>
                                        <p className="text-base leading-none text-gray-800">{shippingcost}</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-base leading-none text-gray-800">Tax</p>
                                        <p className="text-base leading-none text-gray-800">{tax}</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                        <p className="text-2xl leading-normal text-gray-800">Total</p>
                                        <p className="text-2xl font-bold leading-normal text-right text-gray-800 px-3">{total}</p>
                                    </div>
                                    <button onClick={() => setShow(!show)} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



   
      ) : 
      (

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
    </>
  )
};

export default Cart;
