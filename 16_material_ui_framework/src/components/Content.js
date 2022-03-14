import { Grid } from '@mui/material'
import React from 'react'
import CoffeeCard from './CoffeeCard'

export default function Content() {
  return (
      <Grid container spacing={2}>

          <Grid item xs={12} sm={4}>
            <CoffeeCard 
                title='titre 1'
                avatarSrc="https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=20&m=1154642632&s=612x612&w=0&h=dQPjQCt_WOKhD0ysSJG6gIsu7xW65vH8Wf_SaqetIqY="
                subtitle="8.44"
                imageSrc="https://www.illy.com/on/demandware.static/-/Sites-masterCatalog_illycaffe/default/dw3d3ddd5e/products/Coffee-Machines/Machines-Iperespresso-Capsules/60244_coffee-machines_capsules-iperespresso_x1-anniversary-red_illy-shop/2019_X1Anniversary_red_lateral_mug.png"
                description="Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte."
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <CoffeeCard />
          </Grid>

          <Grid item xs={12} sm={4}>
            <CoffeeCard />
          </Grid>

          <Grid item xs={12} sm={4}>
            <CoffeeCard />
          </Grid>

      </Grid>
  )
}
