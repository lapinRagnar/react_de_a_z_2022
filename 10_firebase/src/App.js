import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import db from './firebase'
import { collection, onSnapshot, orderBy, query  } from 'firebase/firestore';
import { handleEdit, handleNew, handleDelete, handleQueryDelete } from './utils'
import Dot from './components/Dot'



function App() {

  const [colors, setColors] = useState([{ name: "Loading...", id: 'initial'}])


  // premiere version pour recuperer les data du firestore
  // useEffect(() => {
  //   const unsub = onSnapshot(collection(db, 'colors'), (snapshot) => {
  //     console.log(snapshot.docs.map(doc => doc.data()));
  //   })
  //   return unsub
  // }, [])

  // deuxieme version
  useEffect(
    () => {
      const collectionRef = collection(db, 'colors')
      const q = query(collectionRef, orderBy("timestamp", "desc"))
      const unsub = onSnapshot(q , (snapshot) => setColors(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))))
      return unsub
    }, []
  )




  return (
    <div>
        <div className="container">
        <h1>Bonjour!</h1>
          <button className='bouton1' onClick={handleNew}>Nouveau</button>
          <button className='bouton1' onClick={handleQueryDelete}>Query Delete</button>
          <ul>

            {
              colors.map((color) => (

                <li key={color.id}>
                  <button className='bouton2 bouton1' onClick={ () => handleEdit(color.id) } >editer</button> 
                  <button className='bouton3 bouton1 ' onClick={ () => handleDelete(color.id) } >supprimer</button> 
                  <Dot color={color.value} /> { color.name}
                </li>

              ))
            }

          </ul>
        </div>

    </div>
  );
}

export default App;
