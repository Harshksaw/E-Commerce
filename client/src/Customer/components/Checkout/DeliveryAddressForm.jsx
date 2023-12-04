
import { Grid, Box } from '@mui/material';
import AdressCard from './AdressCard';
import { Button } from '@mui/material';

const DeliveryAddressForm = () => {
  return (
    <div>
      <Grid>
        <Grid className='border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>

          <div className='p-5 py-7 border-b cursor-pointer'>


            <AdressCard />
            <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253" }}
              size='large' variant='contained'

            >Deliver Here</Button>
          </div>

        </Grid>
        <Grid item xs={12} lg={7}>

          <Box className='border rounded-s-md shadow-md p-5'>
            <form action=""
            
            >
              <h1 className='text-2xl font-semibold'>Add New Address</h1>
              <div className='flex flex-col mt-5'>
                <label htmlFor="">Full Name</label>
                <input className='border rounded-md p-2' type="text" />
              </div>
              <div className='flex flex-col mt-5'>
                <label htmlFor="">Mobile Number</label>
                <input className='border rounded-md p-2' type="text" />
              </div>
              <div className='flex flex-col mt-5'>
                <label htmlFor="">Pincode</label>
                <input className='border rounded-md p-2' type="text" />
              </div>
              <div className='flex flex-col mt-5'>
                <label htmlFor="">Locality</label>
                <input className='border rounded-md p-2' type="text" />
              </div>
              <div className='flex flex-col mt-5'>
                <label htmlFor="">Address</label>
                <input className='border rounded-md p-2' type="text" />
              </div>
              <div className='flex flex-col mt-5'>
                <label htmlFor="">City/District/Town</label>
                <input className='border rounded-md p-2' type="text" />
              </div>
              <div className='flex flex-col mt-5'>
                <label htmlFor="">State</label>
                <input className='border rounded-md p-2' type="text" />
              </div>
              <div className='flex flex-col mt-5'>
                <label htmlFor="">Landmark (Optional)</label>
                <input className='border rounded-md p-2' type="text" />
              </div>
              <div className='flex flex-col mt-5'>
                <label htmlFor="">Alternate Phone (Optional)</label>
                <input className='border rounded-md p-2' type="text" />
              </div>
              <div className='flex items-center mt-5'>
                <input className='mr-2' type="checkbox" />
                <p className='text-sm'>Make it my default address</p>
              </div>
              <Button sx={{ mt: 2, bgcolor: "RGB(145 85 253" }}
                size='large' variant='contained'

              >Save Address</Button>


            </form>

          </Box>

        </Grid>
      </Grid>


    </div>
  )
}

export default DeliveryAddressForm
