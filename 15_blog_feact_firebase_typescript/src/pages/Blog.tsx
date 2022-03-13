import React from 'react'
import { Grid } from '@mui/material'
import BigCard from '../components/BigCard'


export default function Blog() {
  return (

        

    <Grid  >

        <Grid item xs={12} md={12} direction="row" >
          <BigCard 
            title='detail reptile' 
            content='contenu be da be lorem*12contenu be da be lorem*12contenu be da be lorem*12contenu be da be lorem*12contenu be da be lorem*12contenu be da be lorem*12contenu be da be lorem*12contenu be da be lorem*12contenu be da be lorem*12' 
            img="contemplative-reptile.jpg" 
            slug="reptile" /> 
        </Grid>

    </Grid>


  )
}
