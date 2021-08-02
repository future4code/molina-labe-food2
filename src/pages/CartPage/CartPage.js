import React, { useContext, useState } from 'react'
import {
    ButtonContainer,
    HeaderContainer,
    MainContainer,
    ItensContainer,
    ShippingContainer,
    BillContainer,
    TextContainer,
    FormContainer
} from './styles'
import Button from '@material-ui/core/Button';
import useForm from '../../hooks/useForm';
import { placeOrder } from '../../services/post';
import { GlobalContext } from '../../global/GlobalContext';
import CardProducts from '../../components/cards/CardProducts/CardProducts';
import Header from '../../components/header/Header';

const CartPage = () => {
    const global = useContext(GlobalContext)
    
    const { form, setForm, onChange, cleanFields } = useForm({
        paymentMethod: "",
    })

    console.log('foma de pagamento', form.paymentMethod)

    const onSubmitForm = (event) => {
        event.preventDefault()

        const body = {
            products: global.products,
            paymentMethod: form.paymentMethod,
        }

        placeOrder(body, global.restaurantId, cleanFields)
    }


    const displayCards = global.cart && global.cart.length > 0 ? global.cart.map((food) => {
        return (
            <CardProducts 
                key={food.id}
                name={food.name}
                price={food.price}
                ingred={food.price}
                image={food.photoUrl}
                id={food.id}
                />
        )
    }) : <p>Carrinho Vazio</p>


    return (
        <MainContainer>
            <HeaderContainer>
                Meu Carrinho
            </HeaderContainer>
            <ItensContainer>
                {displayCards}
            </ItensContainer>
            <ShippingContainer>
                <p>Frete</p>
                <p>R$0,00</p>
            </ShippingContainer>
            <BillContainer>
                <p>Subtotal</p>
                <p>R$0,00</p>
            </BillContainer>
            <TextContainer>
                <p>Forma de pagamento</p>
            </TextContainer>
            <FormContainer onSubmit={onSubmitForm} value={form.paymentMethod}>
                <div>
                    <input 
                        value='debitcard'
                        type="radio"
                        id="debitcard"
                        name="paymentMethod"
                        onChange={onChange}
                    />
                    <label>Dinheiro</label>
                    </div>
                <div>
                    <input 
                        value='creditcard'
                        type="radio"
                        id="creditcard"
                        name="paymentMethod"
                        onChange={onChange}
                     />
                    <label>Cartão dinheiro</label>
                </div>
                <ButtonContainer>
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                    >
                        Confirmar
                    </Button>
                </ButtonContainer>
            </FormContainer>
            <Header />
        </MainContainer>
    )
}

export default CartPage
