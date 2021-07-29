import React, { useState, useEffect } from 'react'
import CardHistory from '../../components/cards/CardHistory/CardHistory'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import { goToEddit } from '../../router/Coordinator'
import { Link } from 'react-router-dom'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { NameContainer, AddressContainer, AddressData, HistoryTitle } from "./Style"
import { ordersHistory } from '../../services/get'
import axios from "axios"

const ProfilePage = () => {
    useProtectedPage()
    const profile = useRequestData([], `${BASE_URL}/profile`)
    const [orders, setOrders] = useState([])

    const getOrdersHistory = () => {
        const headers = {
            headers:{
               auth:localStorage.getItem(`token`)
            }
        }
        axios.get(`${BASE_URL}/orders/history`, headers)
        .then((res) => {
            setOrders(res.data.orders)
            
        })
        .catch((err) => {
            console.log(err.response)
            
        })
    }
    console.log(orders)

    useEffect (() => {
        getOrdersHistory()
    }, [])

    const ordersInfo = orders.map((orders) => {
        return (
            <CardHistory
                totalPrice={orders.totalPrice}
                restaurantName={orders.restaurantName}
            />
        )
    }) 
    console.log(orders)
 


    return (
        <div>
            {profile.user &&
                <div>
                    <NameContainer>
                        <p>{profile.user.name}</p>
                        <Link to="/editar"><span><CreateOutlinedIcon onClick={profile.user.onClick} /></span></Link>
                    </NameContainer>
                    <p>{profile.user.email}</p>
                    <p>{profile.user.cpf}</p>

                    <AddressContainer>
                        <p>Registered Address</p>
                        <AddressData>
                            <p>{profile.user.address}</p>
                            <Link to="/"><span><CreateOutlinedIcon onClick={profile.user.onClick} /></span></Link>
                        </AddressData>
                    </AddressContainer>

                    <HistoryTitle>
                        <h4>Order History</h4>
                        <hr/>
                    </HistoryTitle>
                </div>
            }

            {ordersInfo ? ordersInfo : <p>Carregando...</p>}

        </div>

    )
}

export default ProfilePage
