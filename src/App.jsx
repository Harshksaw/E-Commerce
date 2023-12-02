import { Routes, Route } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import Cart from './Customer/pages/Cart';
import Navbar from './Customer/components/navbar/Navbar';
import Home from './Customer/pages/Home';
import Product from './Customer/components/Product/Product';
import ProductDetails from './Customer/components/Productdetails/ProductDetails';
import Footer from './Customer/components/Footer';
import Checkout from './Customer/components/Checkout/Checkout';
import DeliveryAddressForm from './Customer/components/Checkout/DeliveryAddressForm';


function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>

        <Toaster/>
      <Routes>

        <Route path="/" element={<Home/>} />


        <Route path="/product" element={<Product/>} />
        <Route path="/productdetails" element={<ProductDetails/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout/" element={<DeliveryAddressForm/>} />


      </Routes>
      <Footer/>
    </div>
  );
}
export default App;