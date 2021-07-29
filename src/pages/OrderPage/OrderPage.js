import React from 'react'
import CardProducts from '../../components/cards/CardProducts/CardProducts'
import { MainContainer, HeaderContainer } from '../CartPage/styles'
import { goToHome } from '../../router/Coordinator'
import { useHistory } from 'react-router'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { IconContainer } from './styled'
import useForm from '../../hooks/useForm'
import { placeOrder } from '../../services/post'
import { BASE_URL } from '../../constants/url'
import useRequestData from '../../hooks/useRequestData'
import { useParams } from 'react-router'

const OrderPage = () => {
    const params = useParams()
    const history = useHistory()
    const products = useRequestData(undefined, `${BASE_URL}/restaurants/${params.restauranteId}`)

    const listProducts = products && products.restaurant.products.map((food) => {
        return ( 
            <div>
                <p>{food.price}</p>
                <p>{food.name}</p>
            </div>
   
        )
    })

    console.log("Lista Renderizada", listProducts)
    console.log("Const product", products)

    

    return (

        <MainContainer>
            <HeaderContainer>
                <IconContainer>
                    <span onClick={() => goToHome(history)}><ArrowBackIosIcon /></span>
                    <p>Restaurantes</p>
                </IconContainer>
            </HeaderContainer>
            {products && <p>{products.restaurant.name}</p>}
            {listProducts}
        </MainContainer>
    )
}

export default OrderPage
