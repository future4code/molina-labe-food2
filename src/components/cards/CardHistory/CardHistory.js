import React from 'react'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { Link } from 'react-router-dom'
import { ProfileTitle, GeneralContainer, NameContainer, AddressContainer, AddressData, HistoryTitle, HistoryContainer } from "./Style"

const CardHistory = (props) => {
    return (
        <GeneralContainer>
            <ProfileTitle>My profile</ProfileTitle>
            <div>
                <NameContainer>
                    <p>{props.name}</p>
                    <Link to="/"><span><CreateOutlinedIcon onClick={props.onClick}/></span></Link>
                </NameContainer>
                <p>{props.email}</p>
                <p>{props.cpf}</p>
            </div>

            <AddressContainer>
                <p>Registered Address</p>
                <AddressData>
                    <p>{props.address}</p>
                    <Link to="/"><span><CreateOutlinedIcon onClick={props.onClick}/></span></Link>
                </AddressData>
            </AddressContainer>

            <HistoryTitle>
                <h4>Order History</h4>
                <hr/>
            </HistoryTitle>

            <HistoryContainer>
                <p>Restaurant name</p>
                <p>Date</p>
                <p>SEUBTOTAL R$</p>
            </HistoryContainer>

        </GeneralContainer>
    )
}

export default CardHistory
