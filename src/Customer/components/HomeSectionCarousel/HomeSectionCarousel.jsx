import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from './HomeSectionCard';





const  HomeSectionCarousel =()=> {
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
    
    const items = [1,1,1,1].map((item)=> <HomeSectionCard/>)

  return (
    <div className="relative px-4 lg:px-8 ">
    <div className="relative p-5">
    {/* <AliceCarousel

        items={items}
        displayButtonsControls
        autoPlay
        autoPlayInterval = {1000}
        infinite
        responsive = {responsive} /> */}
            <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
      
    </div>
    </div>
  )
}
export default HomeSectionCarousel;