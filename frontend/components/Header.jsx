import React, { useState } from "react";

import {BiMenuAltRight} from "react-icons/bi"
import {BsCart} from "react-icons/bs"
import {IoMdHeartEmpty} from "react-icons/io"
import Link from "next/link";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import {VscChromeClose} from "react-icons/vsc"
import Wrapper from "./Wrapper";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 
    ${show}`}
    >
      <Wrapper>
        <Link href="/">
          <img src="/logo.svg" alt="logo" className="w-[40px] md:w-[60px]" />
        </Link>

        {/* Menu  */}
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobileMenu && (

          <MenuMobile showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} setMobileMenu={setMobileMenu}/>
          )
        }

        <div className="flex items-center gap-2 text-black">
            {/* IconStart */}
            <div className="w-8 md:w-12 h-8 md:h-12 flex items-center hover:bg-black/[0.05] justify-center relative cursor-pointer rounded-full ">
                
                <IoMdHeartEmpty className="text-[15px] md:text-[20px]"/>
                
                <div className="h-[14px] md:h-[18px] min-w-[14px]  md:min-w-[18px] rounded-full bg-red-600  absolute top-1  left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]" >51</div>
                
            </div>
            {/* Icon end */}
            
            {/* IconStart */}
            <div className="w-8 md:w-12 h-8 md:h-12 flex items-center hover:bg-black/[0.05] justify-center relative cursor-pointer rounded-full ">
                
                <BsCart className="text-[15px] md:text-[20px]"/>
                
                <div className="h-[14px] md:h-[18px] min-w-[14px]  md:min-w-[18px] rounded-full bg-red-600  absolute top-1  left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]" >5</div>
                
            </div>
            {/* Icon end */}
            {/* Mobile icon start */}
            <div className="w-8 md:w-12 h-8 md:h-12 flex items-center hover:bg-black/[0.05] justify-center relative cursor-pointer rounded-full ">
              {mobileMenu? (
                <VsChromClose onClick={()=> setMobileMenu(false)} className ='text-[16px]'/>
              ): (
                <BiMenuAltRight className='text-[20px]'
                onClick={()=> setMobileMenu(true)}
                />
              )}
            </div>
            
        </div>

      </Wrapper>
    </header>
  );
};

export default Header;
