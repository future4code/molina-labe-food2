import React from 'react'
import {OrderCard, IconDiv, InfoDiv, Icone} from './styled'
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const OrderInProgress = () => {
    return (
        <OrderCard>
            <IconDiv>
                <Icone> <AccessTimeIcon fontSize='large'/> </Icone>
            </IconDiv>
            <InfoDiv>
                <p>Pedido em andamento</p>
                <h5>Bullguer Vila Madale</h5>
                <h5>SUBTOTAL R$67,00</h5>
            </InfoDiv>
        </OrderCard>
    )
}

export default OrderInProgress
