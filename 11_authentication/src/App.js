import logo from './logo.svg';
import './App.css';
import { signup } from './firebase'
import { useRef } from 'react';

function App() {

  const emailRef = useRef()
  const passwordRef = useRef()

  async function handleSignup() {
    await signup(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <div className="App">

      <h1>Authentication tuto</h1>

      <div id='fields'>
        <input ref={emailRef} type="text" placeholder='email' />
        <input ref={passwordRef} type="password" name="" id="" placeholder='mot de passe!' />
      </div>

      <button onClick={handleSignup}>Sign up</button>

    </div>
  );
}

export default App;
