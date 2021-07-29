import React from 'react'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { Link } from 'react-router-dom'
import { GeneralContainer, NameContainer, AddressContainer, AddressData, HistoryTitle, HistoryContainer } from "./Style"

const CardHistory = (props) => {

    return (
        <GeneralContainer>
            
            <HistoryContainer>
                <p>{props.restaurantName}</p>
                <p>date</p>
                <p>{props.totalPrice}</p>
            </HistoryContainer>

        </GeneralContainer>
    )
}

export default CardHistory
