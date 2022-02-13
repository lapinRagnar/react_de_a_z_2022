import React from 'react'
import { useState } from 'react'


export default function Picture({imageName, index, handleRemove}) {

    const [showCloseBtn, setShowCloseBtn] = useState(-1)

    return (

        <div className="relative" key={index} 
            onMouseEnter={() => setShowCloseBtn(index)}
            onMouseLeave={() => setShowCloseBtn(-1)}
        >

        <button className="supprimer-btn"
            onClick={ () => handleRemove(index) }
        >
            x
        </button>
        <img className="mon-profile" src={imageName} alt="" />

        </div>
    )
}
