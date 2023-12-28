import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import pic1 from "../public/p1.png";
import Image from "next/image";
const ProductDetailsCarousel = ({images}) => {




  return (
    <div className="text-black text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >

            {images?.map((img) => (
                    <img
                        key={img.id}
                        src={img.attributes.url}
                        alt={img.attributes.name}
                    />
                ))}
      </Carousel>
    </div>
  );
};
export default ProductDetailsCarousel;
