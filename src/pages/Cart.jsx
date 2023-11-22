import { useEffect, useState } from "react"
import {useSelector } from "react-redux"
import CartItem from "../components/CartItem"

const Cart=() =>{
  const {cart} = useSelector((state)=>state )
  const [totalamount , setTotalamount] = useState(0)
  console.log("cart" ,cart)

  useEffect(()=> {
    setTotalamount(cart.reduce((acc, curr)=> acc + curr.price , 0))
  }, [cart])


  return (
    <div>

      {
          cart.length > 0 ?
          (
            <div>
              <div>
                {cart.map((item, index)=> {
                  return <CartItem key = {item.id} item= {item} itemIndex = {index}/>
                })}
              </div>

              <div>
                  <div>YOur cart</div>
                  <div>Summary</div>
                  <p>{cart.length}</p>


              </div>
              <div>
                <p>Total Length: {cart.length}</p>
                <p>Total amount : {totalamount}</p>
                <button>Checout now</button>
              </div>
              
              
            </div>
          ) 
          :
          (<div>
            <h1>Your cart is empty</h1>
            <Link to="/">
              Go back
              </Link>
          </div>)




      }

      </div>
  )
}
export default Cart;