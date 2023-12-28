import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { BiArrowBack, BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

import { Carousel } from "react-responsive-carousel";
import React from "react";

export const HeroBanner = () => {
  const arrowStyles = {"position":"absolute","zIndex":2,"top":"calc(50% - 15px)","width":30,"height":30,"cursor":"pointer","borderRadius":"50%","backgroundColor":"rgba(0,0,0,0.5)","display":"flex","alignItems":"center","justifyContent":"center" ,"color":"yellow"}
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
      autoPlay = {true}
      infiniteLoop ={true}
      showThumbs={false}
      showIndicators={false}
      showStatus={false}
      renderArrowPrev={(clickHandler, hasPrev, label) =>{
        if(!hasPrev){
          return null;
        }
        return (
          <button
          type="button"
          onClick={clickHandler}
          title={label}
          style={{...arrowStyles, left:15}}
          >
            <BiArrowFromRight size={30} />
          </button>
        )
      }}
      renderArrowNext={(clickHandler, hasPrev, label) =>{
        if(!hasPrev){
          return null;
        }
        return (
          <button
          type="button"
          onClick={clickHandler}
          title={label}
          style={{...arrowStyles, right:15}}
          >
            <BiArrowFromLeft size={30} />
          </button>
        )
      }}
      >

        <div>
          <img
            src="/slide-1.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div
            className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald 
                    bg-gray-100 absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px]
                    md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
          >
            Legend 1
          </div>
        </div>
        <div>
          <img
            src="/slide-2.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div
            className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald 
                    bg-gray-100 absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px]
                    md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
          >
            Legend 1
          </div>
        </div>
        <div>
          <img
            src="/slide-3.png"
            className="aspect-[16/10] md:aspect-auto object-cover"
          />
          <div
            className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald 
                    bg-gray-100 absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px]
                    md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90"
          >
            Legend 1
          </div>
        </div>

      </Carousel>
    </div>
  );
};
