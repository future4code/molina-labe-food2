import React, { useContext } from 'react'
import CardProducts from '../../components/cards/CardProducts/CardProducts'
import { goToHome } from '../../router/Coordinator'
import { useHistory } from 'react-router'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { IconContainer } from './styled'
import { BASE_URL } from '../../constants/url'
import useRequestData from '../../hooks/useRequestData'
import { useParams } from 'react-router'
import { MainContainer, HeaderContainer, Container } from './styled'
import { GlobalContext } from '../../global/GlobalContext'

const OrderPage = () => {
    const global = useContext(GlobalContext)
    const params = useParams()
    const history = useHistory()
    const products = useRequestData(undefined, `${BASE_URL}/restaurants/${params.restauranteId}`)

    const listProducts = products && products.restaurant.products.map((food) => {
        return ( 
            <div>
                <CardProducts
                    key={food.id}
                    name={food.name}
                    price={food.price}
                    ingred={food.price}
                    image={food.photoUrl}
                    id={food.id}
                    onClick={() => addProducts(food)}
                />
            </div>
        )
    })

    const addProducts = (foodItem) => {
        const cart = [...global.cart, foodItem]
        global.setCart(cart)
        console.log("Food", foodItem)
    }



    // console.log("Lista Renderizada", listProducts)
    // console.log("Const product", products)

    return (
        <MainContainer>
            <HeaderContainer>
                <IconContainer>
                    <span onClick={() => goToHome(history)}><ArrowBackIosIcon /></span>
                    <p>Restaurantes</p>
                </IconContainer>
            </HeaderContainer>
            <Container>
                <div className='image'>
                    <img src={products && products.restaurant.logoUrl} alt="restaurante" />
                </div>
                <div className='text'>
                    <h4>{products && products.restaurant.name}</h4>
                    <p>{products && products.restaurant.category}</p>
                    <div>
                        <p>{products && products.restaurant.deliveryTime - 10} - {products && products.restaurant.deliveryTime}min</p>
                        <p>Frete R${products && products.restaurant.shipping},00</p>
                    </div>
                <p>{products && products.restaurant.address}</p>
                </div>
            </Container>
            {listProducts}
        </MainContainer>
    )
}

export default OrderPage