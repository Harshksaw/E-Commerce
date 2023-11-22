import {useSelector } from "react-redux"

export default function Cart() {
  const {cart} = useSelector((state)=>state )

  console.log("cart" ,cart)


  return (
    <div className="grid grid-cols-2">
      <div>

      </div>
      <div>
        <h1>Checkout</h1>
        <p>total Items : ${}</p>
      </div>
    </div>
  )
}
