import React from 'react'

export default function Enfant1({valeurParent, setValeurParent}) {

    console.log("je suis dans enfant 1");
    console.log(valeurParent);
  return (
      <>
         <div>Enfant1</div>
         <div>La valeur du parent est =  {valeurParent} </div>
         <h1>Donner la valeur à modifier pour modifier la valeur du parent</h1>
         <input 
            type="number"
            placeholder='tapez un nombre'
            onChange={e => setValeurParent(e.target.value)}
            />
      </>
  )
}
