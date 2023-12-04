import { Link } from "react-router-dom";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../redux/Slices/CartSlice";
import { increment, decrement } from "../redux/Slices/CounterSlice";




const item = ({ item }) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);


  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
      <div className="w-1/4">
        <img
          src={item.image}
          alt = "item image "
          className="w-full h-full object-center object-cover"
        />
      </div>

      <div className="md:pl-3 md:w-3/4">
        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
          {item.category}
        </p>
        <div className="flex items-center justify-between w-full pt-1">
          <p className="text-base font-black leading-none text-gray-800">
            {item.title}
          </p>

          <div className="flex items-center">
            <button
              className="py-2 px-3 border border-gray-200 focus:outline-none"
              onClick={handleDecrement}
            >
              -
            </button>

            <span className="py-2 px-1 border border-gray-200 mx-2">
              {value}
            </span>

            <button
              className="py-2 px-3 border border-gray-200 focus:outline-none"
              onClick={handleIncrement}
            > 
            +
            </button>
          </div>
        </div>
        <p className="text-xs leading-3 text-gray-600 pt-2">
          Rating : {item.rating.rate}
        </p>
        <p className="w-96 text-xs leading-3 text-gray-600">
          {item.description}
        </p>
        <p className="text-xs leading-3 text-gray-600 py-4">
          Left : {item.rating.count}
        </p>
        <div className="flex items-center justify-between pt-5 pr-6">
          <div className="flex itemms-center">
            <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">
              Add to favorites
            </p>
            <button className="text-xl leading-3 underline text-red-500 pl-5 cursor-pointer " 
            onClick={()=> dispatch(deleteCart(item.id))} >
              Remove
            </button>
          </div>
          <p className="text-base font-black leading-none text-gray-800">${item.price}</p>
        </div>
      </div>
    </div>
  );
};
export default item;
