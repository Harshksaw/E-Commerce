import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from './HomeSectionCard';

import Button from '@material-ui/core/Button';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';

import kurtaPage1 from "../../../assets/ecommerce-products-data-master/Kurta/kurta"




const HomeSectionCarousel = ({sectionname}) => {
    const [activeIndex , setActiveIndex]= useState(0)
    
    const slidePrev = ()=>{ setActiveIndex(activeIndex - 1)}
    const slideNext = ()=>{ setActiveIndex(activeIndex + 1)}


    const responsive = {
        0: {
            items: 1
        },
        720: {
            items: 2
        },
        1024: {
            items: 4,
            // itemsFit: 'contain'
        },
    };

    const items = kurtaPage1.slice(0,8).map((product, idx) => <HomeSectionCard  product ={product} key = {idx} />)     


    return (
        <div className=" border">
            <h2 className = "text-2xl font-extrabold text-gray-900 capitalize text-decoration-blue text-underline">{sectionname}</h2>
            <div className="relative p-10 border  flex flex-row justify-center items-center">
                {activeIndex !== 0  && <Button
                    variant="contained"
                    className="z-20 bg-blue-200"
                    onClick={slidePrev}
                    
                    sx={{
                        position: 'absolute',
                        top: '8rem',  // Adjust this value
                        left: 0,    // or right: 0 depending on which button
                        transform: 'translateY(-50%)',
                        bgcolor: '#0000FF',
                    }}
                    aria-label="previous"
                >
                    <KeyboardArrowLeftIcon sx={{ color: '#0000FF'}} />
                </Button> }
              

                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    // autoPlay

                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={setActiveIndex}
                    activeIndex={activeIndex}
                />
                  {activeIndex !== items.length -5  &&
                  <Button 
                  onClick={slideNext}

                    variant="contained"
                    className="z-25 bg-white"
                   
                    sx={{
                        position: 'absolute',
                        top: '9rem',  // Adjust this value
                        left: 0,    // or right: 0 depending on which button
                        transform: 'translateX(-50%)',
                        bgcolor: 'white',
                    }}
                    aria-label="next"
                >
                    <KeyboardArrowRightIcon sx={{ color: 'blue'  }} />
                </Button>
                }
              
            </div>
        </div>
    )
}
export default HomeSectionCarousel;