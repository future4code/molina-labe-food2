import React from 'react'
import { OrderCard, IconDiv, InfoDiv, Icone } from './styled'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/url'

const OrderInProgress = (props) => {
    const order = useRequestData([], `${BASE_URL}/active-order`)
    console.log('ORDER', order)
    
    return (
        <OrderCard>
            <IconDiv>
                <Icone> <AccessTimeIcon fontSize='large' /> </Icone>
            </IconDiv>
            <InfoDiv>
                <p>Pedido em andamento</p>
                <h5>{props.restaurantName}</h5>
                <h5>SUBTOTAL R${props.totalPrice},00</h5>
            </InfoDiv>
        </OrderCard>
    )
}

export default OrderInProgress

