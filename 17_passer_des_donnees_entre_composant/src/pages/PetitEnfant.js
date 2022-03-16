import React from 'react'

export default function PetitEnfant(props) {
  return  (
      <>
        <h1>Petit Enfant</h1>
        <div>message de du parent vers enfant et petite enfant</div>
        <div>Le message est : " { props.message } " </div>
      </>
  )
}
