import React from 'react'
import { Grid } from '@mui/material';

export default function MachineAcafe() {
  return (
    <div>
        <Grid container direction="column"> 
            <Grid item>
                this is the header will be
            </Grid>
            <Grid item container>
                <Grid item  xs={0} sm={2} />
                <Grid item xs={12} sm={8}>
                    this is where the content will be
                </Grid>
                <Grid item xs={0} sm={2} />    

            </Grid>
        </Grid>
    </div>
  )
}
