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

const CartPage = () => {
    const global = useContext(GlobalContext)
    const { form, setForm, onChange, cleanFields } = useForm({
        products: [{
            id: "",
            quantity: 0
        }],
        paymentMethod: "",
    })

    const onSubmitForm = (event) => {
        event.preventDefault()
        placeOrder(form)
        cleanFields()
    }

console.log(global)





    return (
        <MainContainer>
            <HeaderContainer>
                Meu Carrinho
            </HeaderContainer>
            <ItensContainer>
                <p>Carrinho vazio</p>
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
            <FormContainer onSubmit={onSubmitForm}>
                <div>
                    <input type="radio" />
                    <label>Dinheiro</label>
                </div>
                <div>
                    <input type="radio" />
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
        </MainContainer>
    )
}

export default CartPage
