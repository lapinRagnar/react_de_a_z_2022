import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'


function Header() {

  const [burgerStatus, setburgerStatus] = useState(false)
  const cars = useSelector(selectCars)


  return (

    <Container>
        <a href="https://google.fr">
          <img src="./images/logo.svg" alt="" />
        </a>

        <Menu>

          { cars && cars.map((car, index) => (

            <a href="https://google.fr" key={index} > {car} </a> 

          ))}
  
        </Menu>

        <RightMenu>
          <a href="http://google.fr">Shop</a>
          <a href="http://google.fr">Tesla Account</a>
          <CustomMenu onClick={() => setburgerStatus(true)} />
        </RightMenu>

        <BurgerNav show={burgerStatus} >

          <CloseWrapper>
            <CustomClose onClick={() => setburgerStatus(false) } />
          </CloseWrapper>

          { cars && cars.map((car, index) => (
            
            <li key={index} ><a href="https://google.fr">{car}</a></li>
            

          ))}

          <li><a href="https://google.fr">Existing inventory</a></li>
          <li><a href="https://google.fr">Used inventory</a></li>
          <li><a href="https://google.fr">Trade-in</a></li>
          <li><a href="https://google.fr">Cybertruck</a></li>
          <li><a href="https://google.fr">Existing inventory</a></li>

        </BurgerNav>

    </Container>
    
  )
}

export default Header

const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px; 
  top: 0;
  left: 0;
  right: 0;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }

`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;


`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%) ' };
  transition: transform 0.8s ease-in;

  li {
    padding: 15px 0;
    border-bottom: 5px solid rgba(119, 138, 74, .8)
    a {
      font-weight: 600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;

`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`