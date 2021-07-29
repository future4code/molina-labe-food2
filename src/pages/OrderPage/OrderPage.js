import React from 'react'
import CardProducts from '../../components/cards/CardProducts/CardProducts'
import { goToHome } from '../../router/Coordinator'
import { useHistory } from 'react-router'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { IconContainer } from './styled'
import useForm from '../../hooks/useForm'
import { placeOrder } from '../../services/post'
import { BASE_URL } from '../../constants/url'
import useRequestData from '../../hooks/useRequestData'
import { useParams } from 'react-router'
import { MainContainer, HeaderContainer } from './styled'

const OrderPage = () => {
    const params = useParams()
    const history = useHistory()
    const data = useRequestData([], `${BASE_URL}/restaurants/${params.restauranteId}`)
    const products = data && data.restaurant && data.restaurant.products

    return (
        <MainContainer>
            <HeaderContainer>
                <IconContainer>
                    <span onClick={() => goToHome(history)}><ArrowBackIosIcon /></span>
                    <p>Restaurantes</p>
                </IconContainer>
            </HeaderContainer>
            {products && products.map((product, index) => <CardProducts product={product} key={index} />)}
        </MainContainer>
    )
}

export default OrderPage
