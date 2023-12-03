import OrderTaker from "./OrderTaker"
import {StarBorderIcon} from "@mui/material"


const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">

        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Order Details</h1

            <h1 className="text-lg font-semibold">Delivery address</h1>

            <p className="text-sm text-gray-500">Order #123456789</p>
            </div>
            <div className="py-20">
                <OrderTaker activeStep={3}/>
            </div>
            <Grid className='space-y-5' container>
                {[1,1,1,1,1,1].map((item)=>
                
                <Grid item xs={4} className='shadow-xl rounded-md p-5 border' sx={{alignItems:"center", justifyContent:"space-between"}}>
                        <Grid item xs={6}>

                            <div className="space-x-4 flex items-center ">
                                <img 
                                className="w-[5rem] h-[5rem] object-cover object-top"
                                src="" alt="" />
                                <div className="space-y-2 ml-5 ">
                                    <p className="font-semibold">MEN</p>
                                    <p className="space-x-5 opacity-50 text-xs font-semibold"><span>Color: pink </span></p>
                                    <p>Seller</p>
                                    <p>Price</p>

                                </div>

                            </div>
                        </Grid>

                <Grid>
                    <Gird item>
                        <Box sx={{color:deepPurple[500]}}>
                            <StarBorderIcon
                            
                            sx={{fontSize:"1rem"}}
                            className="px-2 "/>
                            <span className="">Rate and Review Product</span>

                        </Box>

                    </Gird>
                </Grid>

                   
                </Grid>

                
                )}

            </Grid>
        </div>


      
    </div>
  )
}

export default OrderDetails
