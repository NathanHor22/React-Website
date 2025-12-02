import { useState } from 'react'
import './App.css'
import Header from './Components/Header.jsx'
import Navbar from './Components/Navbar.jsx'

function App() {

  return (
    <>
    <Navbar />
      <div className="content-container">
        <Header name="Nathan Hor" />
        <p>Providing immersive XR solutions</p>
      </div>
    </>
  )
}

export default App
