import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/OIP.jpeg";

function Navbar() {
    const cart = useSelector((state) => state.cart)

  return (
    <div>
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <NavLink to="/">
          <div className="flex items-center">
            <img src={logo} alt="" className="h-8 mr-2" />
            <span className="font-bold text-lg">Shopiie</span>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-300 mr-5 space-x-5">
          <NavLink to="/" className="mx-4">
            Home
          </NavLink>

          <NavLink to="/cart" className="flex items-center">
            <div className="relative">

            <FaShoppingCart   className="text-2xl"/>
            <span className="absolute -top-1 -right-2 bg-green-500 text-xs w-5 flex justify-center items-center animate-bounce text-white rounded-full ">{cart.length > 0 ? cart.length : ""}</span>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useSelector } from "react-redux";

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

