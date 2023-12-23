import Link from "next/link";
// import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
// components/dummyData.js
const shoeDummyData = {
  brand: "Nike",
  discountedPrice: 80,
  price: 100,
  imageUrl: "/p1.png", // Replace with the actual path to your image
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const ProductCard = ({ item = shoeDummyData }) => {
  return (
    <div
      className="productCard w-[20rem] m-3 transition-all cursor-pointer"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      {/* <Link href="https://th.bing.com/th/id/OIP.QZ24h9uM0XPvz23agwDxOQHaHa?rs=1&pid=ImgDetMain"> */}
      <img
        className="h-[25rem] w-full object-cover object-left-top "
        src={item.imageUrl}
        alt=""
      />

      {/* </Link> */}

      <div
        className="textPart bg-white p-3"
        style={{ transition: "transform 0.3s ease-out" }}
      >
        <div>
          <p className="font-bold opacity-60">{item.brand}</p>
          {/* <p>{item.description}</p> */}
        </div>
        <div className="flex item-center space-x-2">
          <p className="bold">${item.discountedPrice} </p>
          <p className="line-through"> ${item.price} </p>
          <p className="ml-auto text-base font-medium text-green-500">
            {/* {getDiscountedPricePercentage(item.original_price, item.price)}% off */}
            22
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
