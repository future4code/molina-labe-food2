import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) => {
    const [ cart, setCart] = React.useState([])

    return(
        <GlobalContext.Provider value={{cart, setCart}}>
            {children}
        </GlobalContext.Provider>
    ) 
}