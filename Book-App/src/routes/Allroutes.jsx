// imports
import React from 'react'
import { Route, Routes } from 'react-router-dom' // importing Route,Routes from react-router-dom
import Book from '../components/Book'
import Form from '../components/Form'
import PagenotFound from '../components/PagenotFound'
import PrivateRoute from './PrivateRoute'

const Allroutes = () => {
  return (
    // rendering all the routes for the app component 
        <Routes>
            <Route path='/' element={<Book />} />
        <Route path='*' element={<PagenotFound />} />
        <Route path='/form' element={<PrivateRoute><Form /></PrivateRoute>} />
        </Routes>
  )
}

export default Allroutes