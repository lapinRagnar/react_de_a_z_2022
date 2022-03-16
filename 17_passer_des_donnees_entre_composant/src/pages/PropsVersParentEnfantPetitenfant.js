import React from 'react'
import PetitEnfant from './PetitEnfant'

export default function PropsVersParentEnfantPetitenfant(props) {
  return (
    <>
        <h1>Enfant </h1>
        <div>Le message du parrent : {props.message} </div>
        <PetitEnfant message={props.message} />
    
    </>

  )
}
