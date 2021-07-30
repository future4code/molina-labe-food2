import React from 'react'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { Link } from 'react-router-dom'
import { GeneralContainer, HistoryContainer, RestaurantCardName, DateCard, SubPrice } from "./Style"

const CardHistory = (props) => {

    return (
        <GeneralContainer>
            
            <HistoryContainer>
                <RestaurantCardName>{props.restaurantName}</RestaurantCardName>
                <DateCard >{props.createdAt}</DateCard>
                <SubPrice>SUBTOTAL R${props.totalPrice},00</SubPrice>
            </HistoryContainer>

        </GeneralContainer>
    )
}

export default CardHistory
