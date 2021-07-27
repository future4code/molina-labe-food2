import React from 'react'
import lanche from '../../../assets/lanche/image@3x.png'

import { Container } from './styles'

const CardProducts = () => {
    return (
        <Container>
            <div className='image'>
                <img src={lanche} alt="lanche" />
            </div>
            <div className='text'>
                <h4>Vinil Butantã</h4>
                <div>
                    <p>50 - 60 min</p>
                    <p>Frete R$6,00</p>
                </div>
            </div>
        </Container>
    )
}

export default CardProducts
