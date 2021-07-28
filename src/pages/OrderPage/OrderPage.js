import React from 'react'
import CardProducts from '../../components/cards/CardProducts/CardProducts'
import { MainContainer, HeaderContainer } from '../CartPage/styles'
import { goToHome } from '../../router/cordinator'
import { useHistory } from 'react-router'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { IconContainer } from './styled'

const OrderPage = () => {
    const history = useHistory()

    return (
        <MainContainer>
            <HeaderContainer>
                <IconContainer>
                    <span onClick={() => goToHome(history)}><ArrowBackIosIcon /></span>
                    <p>Restaurantes</p>
                </IconContainer>
            </HeaderContainer>
            <CardProducts />
        </MainContainer>
    )
}

export default OrderPage
