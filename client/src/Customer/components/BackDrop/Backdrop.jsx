import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

const BackdropComponent = ({open}) => {
  return (
    <div>
         <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
            // onClick={handleLoderClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
    </div>
  )
}

export default BackdropComponent