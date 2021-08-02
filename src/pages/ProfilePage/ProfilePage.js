import React, { useState, useEffect } from 'react'
import CardHistory from '../../components/cards/CardHistory/CardHistory'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import { Link } from 'react-router-dom'
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { GeneralContainer, BarContainer, NameContainer, Email, Cpf, Address, AddressContainer, AddressData, HistoryTitle, Title } from "./Style"
import axios from "axios"
import Header from "../../components/header/Header"


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

    useEffect (() => {
        getOrdersHistory()
    }, [])

    const ordersInfo = orders.map((orders) => {

        const data = Date(orders.createdAt)

        return (
            <CardHistory
                totalPrice={orders.totalPrice}
                restaurantName={orders.restaurantName}
                createdAt={data.slice(0,10)}
            />
        )
        //const date = convertDate(order.createdAt)
    }) 

    return (
        <GeneralContainer>
            <BarContainer>
                <Title>My Profile</Title>
            </BarContainer>
                {profile.user &&
                    <div>
                        <NameContainer>
                            <p>{profile.user.name}</p>
                            <Link to="/editar"><span><CreateOutlinedIcon onClick={profile.user.onClick} /></span></Link>
                        </NameContainer>

                        <Email >{profile.user.email}</Email>
                        <Cpf>{profile.user.cpf}</Cpf>
                        
                        <AddressContainer>
                            <Address>Registered Address</Address>
                            <AddressData>
                                <p>{profile.user.address}</p>
                                <Link to="/cadastrar/endereco"><span><CreateOutlinedIcon onClick={profile.user.onClick} /></span></Link>
                            </AddressData>
                        </AddressContainer>

                        <HistoryTitle>
                            <p>Order History</p>
                            <hr/>
                        </HistoryTitle>
                    </div>
                }

                {ordersInfo ? ordersInfo : <p>Carregando...</p>}
            <Header />  

        </GeneralContainer>

    )
}

export default ProfilePage
