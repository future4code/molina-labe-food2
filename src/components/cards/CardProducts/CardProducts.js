import React from 'react'

import { Container } from './styles'

const CardProducts = ({product}) => {
    const image = product && product.photoUrl
    return (
        <Container>
            <div className='image'>
                <img src={product && product.photoUrl} alt="lanche" />
            </div>
            <div className='main'>
                <div className='text'>
                    <h4>{product && product.name} </h4>
                    <p className='description'>{product && product.description} </p>
                    <p>R${product && product.price}</p>
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
