import React from 'react'
import styled from 'styled-components'

function Header() {

  return (
    
    <Nav>
        <Logo src="./images/logo.svg" />
        <NavMenu>

        </NavMenu>
    </Nav>
  )

}   

export default Header

const Nav = styled.nav`
    background: #090b13;
    height: 70px;
    display: flex;
    align-items: center

`

const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`


`

