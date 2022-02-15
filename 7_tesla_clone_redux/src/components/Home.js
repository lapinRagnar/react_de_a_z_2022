import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {


  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery!"
        backgroundImg ="model-s.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery!"
        backgroundImg ="model-x.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery!"
        backgroundImg ="model-y.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section 
        title="Model Y"
        description="Order Online for Touchless Delivery!"
        backgroundImg ="model-3.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      />
      <Section 
        title="Lowest Cost Solar Panels in America"
        description="Money-back garantee!"
        backgroundImg ="solar-panel.jpg"
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
      />
      <Section 
        title="Solar For New Roofs"
        description="Solar roofs costs less than a New roofs"
        backgroundImg ="solar-roof.jpg"
        leftBtnText = "Order Now"
        rightBtnText = "Learn More"
      />
      <Section 
        title="Accessories"
        description="pas de descriptions"
        backgroundImg ="accessories.jpg"
        leftBtnText = "Order Now"
        rightBtnText = ""
      />

    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;

`