import React, { useState } from 'react'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({children}) => {
    const [ cart, setCart] = useState([])
    const [ products, setProducts ] = useState([])
    const [restaurantId, setRestaurantId] = useState()

    console.log(products)

    return(
        <GlobalContext.Provider value={{cart, setCart, products, setProducts, restaurantId, setRestaurantId}}>
            {children}
        </GlobalContext.Provider>
    ) 
}