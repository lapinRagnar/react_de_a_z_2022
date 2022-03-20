import React from 'react'

export default function Enfant1(props) {

    console.log("je suis dans enfant 1");
    console.log(props.valeurParent);
  return (
      <>
         <div>Enfant1</div>
         <div>La valeur du parent est =  {props.valeurParent} </div>
         <h1>Donner la valeur à modifier pour modifier la valeur du parent</h1>
         <input 
            type="number"
            placeholder='tapez un nombre'
            onChange={e => props.setValeurParent(e.target.value)}
            />
      </>
  )
}
