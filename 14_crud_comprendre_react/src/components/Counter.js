import React, { useState } from 'react'

export default function Counter(props) {

//   const tableau = useState(1)
//   const compteur = tableau[0]
//   const setCompteur = tableau[1]
// est l'equivalent de: 
  
  const [compteur, setCompteur ] = useState(1)
  const handleChange = () => {
    setCompteur(compteur + 1)
  }

  return (
    <div>
        
        <div>
            { compteur }
        </div>
        <button onClick={handleChange} >Incrementer</button>
    </div>
  )

}
