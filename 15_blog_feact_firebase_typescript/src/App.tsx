import React, { useState } from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/Blog';
import { auth } from './components/Firebase'
import { onAuthStateChanged } from 'firebase/auth';

function App() {

  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)      
    }
  })


  return (

    <div>

      <Navbar />
      
      <Container maxWidth="lg">

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog/:slug" element={<Blog />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </Container>


      
    </div>
  );
}

export default App;
