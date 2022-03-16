import React from 'react'
import { Link } from 'react-router-dom'
import PasserPropsEntreParentVersEnfant from './PasserPropsEntreParentVersEnfant'

export default function Home() {
  return (
    <div className="container">
      <h1 className='item2'>
        <Link to="/passer-des-props-entre-parent-vers-enfant" > passer des props entre parent vers enfant</Link>
      </h1>

    </div>
  )
}
