
import { Stepper } from '@mui/material';
import { StepLabel } from '@mui/material';
import { Step } from '@mui/material';

const steps=[
    "Placed",
    "Order confirmed",
    "Shipped",
    "Out for Deliver",
    "Delivered"
]


function OrderTaker({activeStep}) {
  return (
    <div className="w-full">
        <Stepper activeStep={activeStep}>
            {steps.map((label)=>
                <Step>
                    <StepLabel sx={{color:'#9155FD' }}>{label}</StepLabel>
                </Step>
            
            )}
           


        </Stepper>
        <div>

        </div>
    </div>
  )
}

export default OrderTaker