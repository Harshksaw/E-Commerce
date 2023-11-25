import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import {mainCarouselData}  from './MainCarouselData'

export default function MainCarousel() {
 

  const items = mainCarouselData.map((item, index) => 
      <img className='cursor-pointer' role='presentation' src={item.image} alt='image' />)



  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
}
