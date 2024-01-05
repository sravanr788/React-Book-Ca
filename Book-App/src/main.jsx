// imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import UserContext from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {/* Wrapping the app with BrowserRouter to provide all the routes throughout our app  */}
    <BrowserRouter> 
    {/* Wrapping the app with UserContext to supply the required state all over the app   */}
    <UserContext>
    <App />
    </UserContext>
    </BrowserRouter>
  </>,
)
