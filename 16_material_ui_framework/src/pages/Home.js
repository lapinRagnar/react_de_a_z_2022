import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <div>Bonjour tout le monde</div>
        <nav>
            <div>
                <Link to='/'> Home </Link>
            </div>
            <div>
                <Link to='/intro'> Intro material ui </Link>
            </div>
        </nav>   

    </div>
  )
}
