import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import pic1 from "../public/p1.png";
import Image from "next/image";
const ProductDetailsCarousel = () => {
  return (
    <div className="text-black text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/p2.png" />
        <img src="/p3.png" />
        <img src="/p4.png" />
        <img src="/p5.png" />
        <img src="/p6.png" />
        <img src="/p7.png" />
      </Carousel>
    </div>
  );
};
export default ProductDetailsCarousel;
