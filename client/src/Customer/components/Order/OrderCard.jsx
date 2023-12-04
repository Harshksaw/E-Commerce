
import { Grid } from '@mui/material';
import { AdjustIcon } from '@mui/icons-material/Adjust';

const OrderCard = () => {
  return (
    <div>
        <div className='p-5 shadow-lg shadow-black hover:shadow-2xl border'></div>
        <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
            <Grid item xs={6}>
                <div className='flex cursor-pointer'>
                    <img src="" alt="" className='w-[5rem] h-[5rem] object-cover object-top' />

                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, minima?</p>
                        <p className='opacity-50 text-xs font-semibold '>size</p>
                        <p className='opacity-50 text-xs font-semibold '>black</p>

                    </div>
                </div>
            </Grid>
            <Grid item xs={2}>
                <p>price $122</p>

            </Grid>
            <Grid>
                    {true &&
                    <div>

                    <p>
                        <AdjustIcon sx={{width:"15px", height: "15px"}}
                        className='text-green-300 mr-3'/>


                        <span>
                            Delivery on march 
                        </span>
                        <span>
                            Your item has been delivered
                        </span>
                    </p>
                    <p className='text-xs'> Your product has been delivered</p>

                        </div>
                    }
                    {false &&
                    <p>
                        <span>
                            Expected Delivery
                        </span>
                    </p>
                    }

            </Grid>

        </Grid>
      
    </div>
  )
}

export default OrderCard
