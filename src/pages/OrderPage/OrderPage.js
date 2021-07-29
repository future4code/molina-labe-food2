import React from 'react'
import CardProducts from '../../components/cards/CardProducts/CardProducts'
import { MainContainer, HeaderContainer } from '../CartPage/styles'
import { goToHome } from '../../router/Coordinator'
import { useHistory } from 'react-router'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { IconContainer } from './styled'
import useForm from '../../hooks/useForm'
import { placeOrder } from '../../services/post'

const OrderPage = () => {
    const history = useHistory()
    // const [form, onChange, clear] = useForm({products: [{id: "", quantity: ""}], paymentMethod: ""})

    // const onSubmitForm = (event) => {
    //     event.preventDefault()
    //     placeOrder(form, clear)
    //     console.log(form)
    // }



    return (

        <MainContainer>
            <HeaderContainer>
                <IconContainer>
                    <span onClick={() => goToHome(history)}><ArrowBackIosIcon /></span>
                    <p>Restaurantes</p>
                </IconContainer>
            </HeaderContainer>
            <form>
                <CardProducts />
            </form>
        </MainContainer>
    )
}

export default OrderPage
