import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import db from './firebase'
import { collection, doc, onSnapshot, setDoc } from 'firebase/firestore';


const Dot = ({color}) => {

  const style = {
    height: 50,
    width: 50,
    margin: "0px 10px",
    backgroundColor: color,
    borderRadius: "50%",
    display: "inline-block"
  }
  return (
    <span style={style}></span>
  )
}

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

  const handleNew =  async () => {
    const docRef = doc(db, 'colors', 'color001')
    const paylod = { name: 'black', value: '#000'}
    await setDoc(docRef, paylod)
  }

  return (
    <div>
        <h1>Bonjour!</h1>
        <button onClick={handleNew}>Nouveau</button>
        <ul>

          {
            colors.map((color) => (

              <li key={color.id}>
                <a href="#">editer</a> <Dot color={color.value} /> { color.name}
              </li>

            ))
          }

        </ul>
    </div>
  );
}

export default App;
