import React from 'react'
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
import { useHistory } from 'react-router-dom';


const CartPage = () => {

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
            <FormContainer>
                <div>
                    <input type="radio" />
                    <label>Dinheiro</label>
                </div>
                <div>
                    <input type="radio" />
                    <label>Cartão dinheiro</label>
                </div>
            </FormContainer>
            <ButtonContainer>
                <Button
                    variant="contained"
                    color="secondary">
                    Confirmar
                </Button>
            </ButtonContainer>
        </MainContainer>
    )
}

export default CartPage
