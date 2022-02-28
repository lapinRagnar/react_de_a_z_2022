import logo from './logo.svg';
import './App.css';
import { logout, signup, useAuth, login } from './firebase'
import { useRef, useState } from 'react';
import Profile from './Profile';

function App() {

  
  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth()

  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSignup() {

    setLoading(true)

    try {
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch (e){
      console.log("erreur : " + e.message);
    }

    setLoading(false)

  }

  async function handleLogin() {

    setLoading(true)

    try {
      await login(emailRef.current.value, passwordRef.current.value)
    } catch (e){
      console.log("erreur : " + e.message);
    }

    setLoading(false)

  }

  async function handleLogout() {
    
    setLoading(true)
    try {
      await logout()
    } catch {
      console.log("erreur de deconnexion! ");
    }
    setLoading(false)

  }

  return (
    <div className="App">

      <h1>Authentication tuto</h1>

      { !currentUser && 
        <>
          <img className="avatar" src="https://images.assetsdelivery.com/compings_v2/triken/triken1608/triken160800029.jpg" alt="" />
          <div>Connecté en tant que: { currentUser?.email } </div>

          <div id='fields'>
            <input ref={emailRef} type="text" placeholder='email' />
            <input ref={passwordRef} type="password" name="" id="" placeholder='mot de passe!' />
          </div>

          <button disabled={loading } onClick={handleSignup}>Sign up</button>
          <button disabled={loading } onClick={handleLogin}>Log in</button>
          
        </>

      }
      
      



      <div>

        { currentUser && 
          <>
            Bonjour ({ currentUser?.email })
            <Profile /> 
            <button disabled={loading || !currentUser } onClick={handleLogout}>Log out</button>
            <div>
            </div>
          </>
        
        }  

      </div>

    </div>
  );
}

export default App;
