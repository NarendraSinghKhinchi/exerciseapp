import React from 'react'
import {Route , Routes } from 'react-router-dom' ;
import Box from '@mui/material/Box';
import './App.css' ;
import Home from './Pages/Home' ;
import ExerciseDetail from './Pages/ExerciseDetail' ;
import Navbar from './components/Navbar' ;
import Footer from './components/Footer' ;
import { AuthContextProvider } from './components/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Box width="400px" sx={{width : {xl : '1488px'}}} m='auto'>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="exercise/:id" element={<ExerciseDetail/>} />
        </Routes>
        <Footer></Footer>
      </Box>
    </AuthContextProvider>
  )
}

export default App ;