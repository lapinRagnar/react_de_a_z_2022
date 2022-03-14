import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {

  const classes = useStyles()
  return (
    <div>
        <nav className="nav-container">
            <div className='titre-be'> Tuto @material-ui - Bonjour tout le monde</div>
            <div  className='navigation1' >
                <Link className={classes.linkStyle} to='/'> Home </Link>
            </div>
            <div  className='navigation1'>
                <Link className={classes.linkStyle} to='/intro'> Intro material ui </Link>
            </div>
            <div className='navigation1'>
                <Link className={classes.linkStyle} to='/machine-a-cafe'>Boutique machine à café</Link>
            </div >
            <div className='navigation1'>
                <Link className={classes.linkStyle} to='/passer-props-dans-makestyle'>makeStyle() avancée - passer dans props </Link>
            </div >
            <div className='navigation1'>
                <Link className={classes.linkStyle} to='/typograpgy'> exemple Typography </Link>
            </div >
            
        </nav>   

    </div>
  )
}

const useStyles = makeStyles({
  linkStyle: {
    textDecoration: 'none',
    color: 'black'
  }
})
