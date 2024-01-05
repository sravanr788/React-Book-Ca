// imports 
import React from 'react'
import './App.css'
import Book from './component/Book'
import Navbar from './component/Navbar'
import Allroutes from './routes/Allroutes'
import Form from './component/Form'

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
