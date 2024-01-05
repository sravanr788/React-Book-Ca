// imports 
import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Allroutes from './routes/Allroutes'

function App() {

  return (
    <>
    {/* Providing all routes and the navbar  in the app   */}
    <Navbar />
    <Allroutes />
        </>
  )
}

export default App
