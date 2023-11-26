import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from './HomeSectionCard';

import Button from '@material-ui/core/Button';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



const HomeSectionCarousel = () => {
    const responsive = {
        0: {
            items: 1
        },
        720: {
            items: 2
        },
        1024: {
            items: 5,
            // itemsFit: 'contain'
        },
    };

    const items = [1, 1, 1, 1].map((item) => <HomeSectionCard />)

    return (
        <div className=" border border-black ">
            <div className="relative p-10 border  flex flex-row justify-center items-center">
                <Button
                    variant="contained"
                    className="z-20"
                    sx={{
                        position: 'absolute',
                        top: '8rem',  // Adjust this value
                        left: 0,    // or right: 0 depending on which button
                        transform: 'translateY(-50%)',
                        bgcolor: 'blue',
                    }}
                    aria-label="previous"
                >
                    <KeyboardArrowLeftIcon sx={{ color: 'blue' }} />
                </Button>
              

                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    autoPlay
                    infinite
                    responsive={responsive}
                    disableDotsControls
                />
                  <Button
                    variant="contained"
                    className="z-25"
                    sx={{
                        position: 'absolute',
                        top: '9rem',  // Adjust this value
                        left: 0,    // or right: 0 depending on which button
                        transform: 'translateX(-50%)',
                        bgcolor: 'blue',
                    }}
                    aria-label="previous"
                >
                    <KeyboardArrowRightIcon sx={{ color: 'blue'  }} />
                </Button>
              
            </div>
        </div>
    )
}
export default HomeSectionCarousel;