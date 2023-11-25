import { Routes, Route } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import Cart from './Customer/pages/Cart';
import Navbar from './Customer/components/navbar/Navbar';
import Home from './Customer/pages/Home';

function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>

        <Toaster/>
      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />

      </Routes>
    </div>
  );
}
export default App;