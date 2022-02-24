import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { db, auth } from './firebase-config'
import { collection, doc, getDocs } from 'firebase/firestore' 

import './App.css';



function App() {

 

  const [registerEmail, setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")

  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })
  
  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  }

  const logout = async () => {
      await signOut(auth)
  }

  return (
    <div className="App">
        <div className="">
            <h3>Register User</h3>
            <input type="email" name="" id="" placeholder="email"  onChange={ (event) => setRegisterEmail(event.target.value) } />
            <input type="password" name="" id="" placeholder='mot de passe' onChange={ (event) => setRegisterPassword(event.target.value) } />

            <button onClick={ register }>Créer user</button>
        </div>
        <div>
          <h3>Login</h3>
          <input type="email" name="" id="" placeholder="email" onChange={ (event) => setLoginEmail(event.target.value) } />
          <input type="password" name="" id="" placeholder='mot de passe' onChange={ (event) => setLoginPassword(event.target.value) } />

          <button onClick={ login }>Login</button>
        </div>

        <h4>User logged in : { user?.email} </h4>
        <button onClick={logout}>Se deconnecter</button>
    </div>
  );
}

export default App;
