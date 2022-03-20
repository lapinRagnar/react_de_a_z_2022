import React from 'react'
import { Link } from 'react-router-dom'


export default function Home(props) {

  console.log("je suis dans home");
  console.log(props.valeurParent)

  return (
    <div className="container">
      <h1 className='item2'>
        <Link to="/passer-des-props-entre-parent-vers-enfant" > passer des props entre parent vers enfant</Link>
      </h1>
      <h1 className='item2'>
        <Link to="/props-vers-parent-enfant-petitenfant" > passer des props entre parent vers enfant et petite enfant</Link>
      </h1>
      <div className='item2'>
        <h1>
          <Link to="/enfant-vers-parent"  > enfant vers parent  </Link>
        </h1>

      </div>

    </div>
  )
}
