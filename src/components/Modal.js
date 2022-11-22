import { Grid } from '@mui/material';
import React, { useState } from 'react'


export default function Modal({open}) {
  
  return (
    <div>
      {open && (
        <div className="">
          <Grid container className="bg-white modalPosition">
            <Grid xs={12}>
              <p>vhochiohib</p>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  )
}
