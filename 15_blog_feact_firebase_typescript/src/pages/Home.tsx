import React from 'react'
import { Grid } from '@mui/material'
import LittleCard from '../components/LittleCard'


export default function Home() {
  return (

        

    <Grid container >

        <Grid item xs={12} md={6} direction="row">
        <LittleCard 
            title='reptile' 
            description='bonjour à tous!' 
            img="contemplative-reptile.jpg" 
            slug="reptile" /> 
        </Grid>
        <Grid item xs={12} md={6}>
        <LittleCard 
            title='boitier ordi' 
            description='Le choix d’un boitier pc doit être réfléchi et mûri. Beaucoup de caractéristiques sont à prendre en compte, il vaut donc mieux prendre son temps avant de se jeter sur le premier boitier pc disponible, sous peine de se retrouver avec quelque-chose d’incompatible avec les composants intégrés.' 
            img="BoitiersOrdi.jpg" 
            slug="reptile" /> 
        </Grid>
        <Grid item xs={12} md={6}>
        <LittleCard 
            title='THE LOST PLANET DESIGN' 
            description='bonjour à tous! Dans ce nouveau tuto, nous allons réaliser une superbe conception en mélangeant quelques astuce et texture pour un rendu sublimissime avec Photoshop.' 
            img="THE_LOST_PLANET_DESIGN_41.jpg" 
            slug="reptile" /> 
        </Grid>

    </Grid>


  )
}
