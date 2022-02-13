import React, { Component, useEffect, useState } from 'react';

// composant fonctionnel

export default function Picture() {

//   const [myTimer, setMyTimer] = useState(null)

  // quand le composant est monté
  useEffect(()=>{

      const myTimer = setInterval(() => {
          console.log('timer appellé!');
      }, 2000)

      return () => clearInterval(myTimer)
  }, [])



  return (
      <div>
          <img className="mon-profile" src="mon-profile.jpg" alt="" />
      </div>
  )
}




// composant en class

// export default class Picture extends Component {

//     constructor(props) {
//         super(props)
//         this.state = {timer: null}
//     }

//     componentDidMount () {
//         this.setState({
//             timer: setInterval(() => {
//                 console.log("le timer est appelé!");
//             }, 2000)
//         })
//     }
  
//     componentWillUnmount(){
//         console.log("le composant Picture a été supprimé");
//         clearInterval(this.state.timer)      
//     }

//     render() {

//         return <div>
//             <img className="mon-profile" src="mon-profile.jpg" alt="" />
//         </div>;
//     }
// }
