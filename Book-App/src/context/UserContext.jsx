import React, { createContext, useState } from 'react'

export const  AppContext = createContext(); // creating a context for the app to manage and supply reuired state

const UserContext = ({children}) => {
    const [value,setValue] = useState("");
    const [showBook,setshowBook] = useState(false);         

  return ( // providing the required state for all the children 
    <div> 
        <AppContext.Provider value={{value,setValue,showBook,setshowBook}}> 
            {children}
        </AppContext.Provider>
    </div>
  )
}

export default UserContext