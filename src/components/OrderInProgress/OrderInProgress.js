import React from 'react'
import { OrderCard, IconDiv, InfoDiv, Icone } from './styled'
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const OrderInProgress = (props) => {
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
