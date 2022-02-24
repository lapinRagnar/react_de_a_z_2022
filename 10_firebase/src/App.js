import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import db from './firebase'
import { collection, onSnapshot  } from 'firebase/firestore';
import { handleEdit, handleNew } from './utils'
import Dot from './components/Dot'



function App() {

  const [colors, setColors] = useState([{ name: "Loading...", id: 'initial'}])

  console.log(colors);

  // premiere version pour recuperer les data du firestore
  // useEffect(() => {
  //   const unsub = onSnapshot(collection(db, 'colors'), (snapshot) => {
  //     console.log(snapshot.docs.map(doc => doc.data()));
  //   })
  //   return unsub
  // }, [])

  // deuxieme version
  useEffect(
    () => 
        onSnapshot(collection(db, 'colors'), (snapshot) => setColors(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})))), []
  )




  return (
    <div>
        <h1>Bonjour!</h1>
        <button onClick={handleNew}>Nouveau</button>
        <ul>

          {
            colors.map((color) => (

              <li key={color.id}>
                <a href="#" onClick={ () => handleEdit(color.id) } >editer</a> <Dot color={color.value} /> { color.name}
              </li>

            ))
          }

        </ul>
    </div>
  );
}

export default App;
