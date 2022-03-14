import { Grid } from '@mui/material'
import React from 'react'
import CoffeeCard from './CoffeeCard'
import coffeMakerList  from '../datas/constant'

export default function Content() {
 
    const getCoffeMakerCard = coffeMakerObj => {
        return (
          <Grid item xs={12} sm={4}>
            <CoffeeCard {...coffeMakerObj} />
          </Grid>
        );
      };

  return (

      <Grid container spacing={2}>

          
        <Grid container spacing={2}>
            {coffeMakerList.map(coffeMakerObj => getCoffeMakerCard(coffeMakerObj))}
        </Grid>

      </Grid>
  )
}
