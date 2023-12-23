import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { updateCart, removeFromCart } from "@/store/cartSlice";
// import { useDispatch } from "react-redux";
const CartItem = ({ data }) => {
  

    return (
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            {/* IMAGE START */}
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                {/* <Image
                    src={p.thumbnail.data.attributes.url}
                    alt={p.name}
                    width={120}
                    height={120}
                /> */}
            </div>
            {/* IMAGE END */}

            <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* PRODUCT TITLE */}
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        {p.name}
                    </div>

                    {/* PRODUCT SUBTITLE */}
                    <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                        {p.subtitle}
                    </div>

                    {/* PRODUCT PRICE */}
                    <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                        MRP : &#8377;{p.price}
                    </div>
                </div>

                {/* PRODUCT SUBTITLE */}
                <div className="text-md font-medium text-black/[0.5] hidden md:block">
                    {/* {p.subtitle}  */} subtiit
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Size:</div>
                            <select
                                className="hover:text-black"
                                onChange={(e) =>
                                    updateCartItem(e, "selectedSize")
                                }
                            >
                                     <option value="1">1</option>
                                       <option value="1">12</option>
                                       <option value="1">12</option>                                       
                                       <option value="1">13</option>
                                       <option value="1">14</option>
                                       <option value="1">11</option>

                            </select>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity:</div>
                            <select
                                className="hover:text-black"
                                onChange={(e) => updateCartItem(e, "quantity")}
                            >
                               
                            </select>
                        </div>
                    </div>
                    <RiDeleteBin6Line
                        onClick={() =>
                            dispatch(removeFromCart({ id: data.id }))
                        }
                        className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                    />
                </div>
            </div>
        </div>
    );

};

export default CartItem; -