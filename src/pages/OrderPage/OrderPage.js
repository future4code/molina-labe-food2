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
    const products = useRequestData([], `${BASE_URL}/restaurants/${params.id}`)


    // const listProducts = products.filter((products) => {
    //     return products.id === params.id
    // }).map((products) => {
    //     return (
    //         <p>{products.category}</p>
    //     )
    // })

    console.log(products)

    return (

        <MainContainer>
            <HeaderContainer>
                <IconContainer>
                    <span onClick={() => goToHome(history)}><ArrowBackIosIcon /></span>
                    <p>Restaurantes</p>
                </IconContainer>
            </HeaderContainer>
            <form>
                {/* <CardProducts /> */}
                {/* {listProducts} */}
            </form>
        </MainContainer>
    )
}

export default OrderPage
