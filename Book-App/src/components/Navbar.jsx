// imports 
import React,{ useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/UserContext';

const Navbar = () => {
    // importing the value state and the state setter function from the context 
    const {value,setValue} = useContext(AppContext);

  return ( // rendering the navbar of the app 
    <div>
        <div className='nav flex'>
            {/* supplying the links to the form and book components  */}
            <Link to={"/"} style={{textDecoration : "none" , color : "white"}}>
            <div className='flex logodiv'>
                <img src="https://kalvium.community/images/sidebar-3d-logo.svg" alt="" />
                <h3 style={{marginLeft : "6px"}}>Kalvium Books </h3>
            </div> </Link>
            {/* adding a event handler to the input and setting the value the user types  */}
            <input type="text" className='input' placeholder='Search Books' onChange={(e)=>{setValue(e.target.value)}}  /> 
            <Link to="/form">
            <button className='register'>Register </button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar