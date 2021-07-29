import React from 'react'
import image from '../../../assets/lanche/image@3x.png'

import { Container } from './styles'

const CardProducts = () => {
    return (
        <Container>
            <div className='image'>
                <img src={image} alt="restaurante" />
            </div>
            <div className='main'>
                <div className='text'>
                    <h4>Bullguer</h4>
                    <p>Pão, carne. queijo, picles e molho.</p>
                    <p>R$23,00</p>
                </div>
                <div className='button'>
                    <span>2</span>
                    <button>remover</button>
                </div>
            </div>
        </Container>
    )
}

export default CardProducts
