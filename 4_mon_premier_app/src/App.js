import React, { useEffect, useState } from "react"
import Picture from "./components/Picture";
import "./css/app.css"

// composant a base de fonction

function App(){

    // pour declarer les varibles d'état on va utiliser les hooks
    const [titre, setTitre] = useState("Bonjour les amis!")
    const [show, setShow] = useState(false)

    // equivalent de componentDidMount en hook
    useEffect(() => console.log('le composant a été monté - useEffect!'), []) 

    function handleClick () {
        setShow(!show)
    }

    return (
        <div>
            {console.log('le jsx a été monté!')}
            <h1>{titre} </h1>
            <p> cliquer pour afficher l'image</p>
            { show ? <Picture/> : null }
            <button className="element-btn" onClick={handleClick}>Cliquez</button>
        </div>
    )
}

// composant a base de classe 

// class App extends React.Component{

//     constructor(props) {
//         super(props)
//         this.state = {
//             titre: '1ere evenement avec React js pour interagir avec le dom',
//             show: false
//         }
//         console.log("contructeur appelé!");
//     }

//     componentDidMount(){
//         console.log("composant monté!");
//         this.setState({titre: "le composant a été monté"})    
//     }

//     componentDidUpdate() {
//         console.log("le composant mise a jour!");
//     }

//     render() {

//         console.log("render appelé!");

//         return <div>
//             <h1>{this.state.titre} </h1>
//             <p> cliquer pour afficher l'image</p>
//             {
//                 this.state.show ?
//                 <Picture/>
//                 : null
//             }
//             <button className="element-btn" onClick={()=>{this.setState({show: !this.state.show})}}>Cliquez</button>
//         </div>
//     }
// }

export default App

