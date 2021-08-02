import React, { useState, useEffect } from "react"

const GlobalState = (props) => {
    // variavel products ela vem do endpoint

    const [ orders, setOrders ] = useState({})
    const [ sendCart, setSendCart ] = useState([])
    const [ cart, setCart ] = useState([])

    useEffect(() => {
        const product = products.filter((product) => {
            if (product.id === orders.id) {
                return product
            }
        })
        setSendCart(...sendCart, product)

        HandlePedidos()
    }, [orders])

    const HandlePedidos = () => {
        const filterOrders = sendCart.filter((elemento) => {
            if ( elemento.id === order.id ) {
                return 
            }
        })
    }
}