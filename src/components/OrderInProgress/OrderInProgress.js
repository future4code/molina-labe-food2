import React from 'react'
import { OrderCard, IconDiv, InfoDiv, Icone, DescriptionDiv } from './styled'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'

const OrderInProgress = () => {
    const order = useRequestData([], `${BASE_URL}/active-order`)

    let currentOrder = order.order


    return <OrderCard>
        <IconDiv>
            <Icone> <AccessTimeIcon fontSize='large' /> </Icone>
        </IconDiv>
        {currentOrder && <InfoDiv>
            <DescriptionDiv>
                <p>Pedido em andamento</p>
            </DescriptionDiv>
            <DescriptionDiv>
                <h4>{currentOrder.restaurantName}</h4>
            </DescriptionDiv>
            <DescriptionDiv>
                <h5>SUBTOTAL R${currentOrder.totalPrice}</h5>
            </DescriptionDiv>
        </InfoDiv>}
    </OrderCard>

}

export default OrderInProgress

