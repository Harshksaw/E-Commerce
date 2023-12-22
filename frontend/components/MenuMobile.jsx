import React, { useState } from 'react' // Added useState import

import {BsChevronDown} from "react-icons/bs"
import Link from "next/link"

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

const subMenuData = [
    { id: 1, name: "Jordan", doc_count: 11 },
    { id: 2, name: "Sneakers", doc_count: 8 },
    { id: 3, name: "Running shoes", doc_count: 64 },
    { id: 4, name: "Football shoes", doc_count: 107 },
];

const MenuMobile = ({showCatMenu ,setShowCatMenu ,setMobileMenu }) => { 
//   const [showCatMenu, setShowCatMenu] = useState(false); // Added state for showCatMenu

  return (
    <ul className='md:hidden flex flex-col gap-4 font-medium text-gray-600 absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t '>
        {data.map((item) => (
            <React.Fragment  key={item.id}>
                {!!item?.subMenu ? 
                (
                    <li className="cursor-pointer flex justify-center gap-2 relative border-b flex-col  px-5 py-4 "
                    onClick={() => setShowCatMenu(!showCatMenu)} // Toggle showCatMenu on click
                    
                    >
                        <div className ='flex '>
                            {item.name} 

                            <BsChevronDown size={12}/>
                        </div>

                        {showCatMenu
                        && 
                        (
                            <ul className='bg-black/[0/05] -mx-5 mt-4 -mb-4'>
                                {subMenuData.map((subMenu)=>{
                                    return(
                                        <Link href="/" key={subMenu.id} 
                                        onClick ={()=>
                                            {
                                            setShowCatMenu(false) 
                                            setMobileMenu(false)
                                            }}>

                                            <li 
                                            className='py-4 px-9 border-5 flex justify-between'>

                                                {subMenu.name}
                                                <span className='opacity-60 text-sm'>count2</span>
                                            </li>
                                        </Link>
                                    )
                                })}
                            </ul>
                        )
                        }
                        
                        
                    </li>
                ): (
                    <li className='py-4 px-5 border-b'>
                        <Link href ={item?.url} onClick={()=>setMobileMenu(false)}>
                            
                            {item.name}
                        </Link>

                    </li>

                )}
           
            </React.Fragment>
        ))}
      
    </ul>
  )
}

export default MenuMobile; // Export MenuMobile component
