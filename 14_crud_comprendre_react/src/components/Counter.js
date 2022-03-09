import React, { useState } from 'react'

export default function Counter(props) {

  const tableau = useState(1)
  const compteur = tableau[0]
  const setCompteur = tableau[1]

  return (
    <div>
        
        <div>
            { compteur }
        </div>
        <button onClick={() => setCompteur(compteur + 1)} >Incrementer</button>
    </div>
  )

}
