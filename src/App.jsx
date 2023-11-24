import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Navbar from "./navbar/Navbar"
import Cart from './pages/Cart';
import { Toaster } from 'react-hot-toast';

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