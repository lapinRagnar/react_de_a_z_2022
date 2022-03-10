import React from 'react'
import { Container, Grid } from '@mui/material'
import LittleCard from '../components/LittleCard'


export default function Home() {
  return (
    <div>
        
        <Container maxWidth="sm" >
        <Grid container spacing={4}>

          <Grid item xs={12} md={6} direction="row">
            <LittleCard /> 
          </Grid>
          <Grid item xs={12} md={6}>
            <LittleCard /> 
          </Grid>
          <Grid item xs={12} md={6}>
            <LittleCard /> 
          </Grid>

        </Grid>


      </Container>

    </div>
  )
}
