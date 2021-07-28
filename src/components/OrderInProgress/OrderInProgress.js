import React from 'react'
import { OrderCard, IconDiv, InfoDiv, Icone } from './styled'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/url'

const OrderInProgress = () => {
   
     const order = useRequestData([{}], `${BASE_URL}/active-order`) 
    
 
 let currentOrder = order.order
 console.log('ORDER', currentOrder) 

    
return <OrderCard>
            <IconDiv>
                <Icone> <AccessTimeIcon fontSize='large' /> </Icone>
            </IconDiv>
            <InfoDiv>
                <p>Pedido em andamento</p>
                <h5></h5>
                <h5>SUBTOTAL R$,00</h5>
            </InfoDiv>
        </OrderCard>
    
}

export default OrderInProgress
