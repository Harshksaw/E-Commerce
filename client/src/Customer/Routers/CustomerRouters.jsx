
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import ProductDetails from '../components/Productdetails/ProductDetails';
import Product from '../components/Product/Product';
import Cart from '../pages/Cart';
import CheckoutPage from '../components/checkout/CheckoutPage';
import Home from '../pages/Home';
import Signup from '../components/Auth/Signup';
import Login from '../components/Auth/Login';


const CustomerRouters =()=> {
    return (
        <div>
            <div>
                <Navbar/>


            </div>
            <Routes>
                <Route path="/" element={<Home/>} />


                <Route path="/product" element={<Product />} />
                <Route path="/productdetails" element={<ProductDetails />} />

                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />


                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckoutPage />} />


           


            </Routes>
            <div>
                <Footer/>
            </div>
        </div>
    )
}
export default CustomerRouters