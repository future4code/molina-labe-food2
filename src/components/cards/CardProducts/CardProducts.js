import React from 'react'
import { Container } from './styles'

const CardProducts = (props) => {
    return (
        <Container>
            <div className='image'>
                <img src={props.image} alt="restaurante" />
            </div>
            <div className='main'>
                <div className='text'>
                    <h4>{props.name}</h4>
                    <p>{props.ingred}</p>
                    <p>R${props.price}</p>

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
