import React from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) => {
    const [ cart, setCart] = React.useState([])
    const [ products, setProducts ] = React.useState({})

    console.log(products)

    return(
        <GlobalContext.Provider value={{cart, setCart, products, setProducts}}>
            {children}
        </GlobalContext.Provider>
    ) 
}