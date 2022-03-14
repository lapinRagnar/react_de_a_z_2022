import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <nav className="nav-container">
            <div className='titre-be'> Tuto @material-ui - Bonjour tout le monde</div>
            <div  className='navigation1'>
                <Link to='/'> Home </Link>
            </div>
            <div  className='navigation1'>
                <Link to='/intro'> Intro material ui </Link>
            </div>
            <div className='navigation1'>
                <Link to='/machine-a-cafe'>Boutique machine à café</Link>
            </div >
        </nav>   

    </div>
  )
}
