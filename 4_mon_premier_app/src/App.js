import React, { useEffect, useRef, useState } from "react"
import Pictures from "./components/Pictures";
import "./css/app.css"



function App(){

    // pour declarer les varibles d'état on va utiliser les hooks
    const [titre, setTitre] = useState("Bonjour les amis!")
    const [show, setShow] = useState(false)
    const isShowInitialize = useRef(false)

    // equivalent de componentDidMount en hook
    useEffect(() => console.log('le composant a été monté - useEffect!'), []) 

    // equivalent de componentDidUpdate
    useEffect(() => console.log('show est mise à jour!'), [show])

    function handleClick () {
        setShow(!show)
    }

    return (
        <div>
            {console.log('le jsx a été monté!')}
            <h1>{titre} </h1>
            <p> cliquer pour afficher l'image</p>
            { show ? <Pictures/> : null }
            <button className="element-btn" onClick={handleClick}>Cliquez</button>
        </div>
    )
}


export default App

