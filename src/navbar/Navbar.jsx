import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../assets/OIP.jpeg"

function Navbar() {
    return (
        <div className="flex flex-row justify-between w-full">
            <NavLink to="/">
                <div className="">
                    <img src={logo} alt="" className="h-10" />
                </div>
            </NavLink>

            <div className="flex flex-row">
                <div>
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>

                </div>

                <NavLink to="/cart">
                    <div>
                        <FaShoppingCart />
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Navbar;
