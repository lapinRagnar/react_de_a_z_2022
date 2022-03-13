import React from 'react';
import { Container } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Blog from './pages/Blog';

function App() {

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
