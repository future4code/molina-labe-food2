import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

const CardProducts = (props) => {
    const restaurant = props.restaurants
    
    return (
        <Link to=''>
            <Container>
                <div className='image'>
                    <img src={restaurant && restaurant.logoUrl} alt="restaurante" />
                </div>
                <div className='text'>
                    <h4>{restaurant && restaurant.name}</h4>
                    <div>
                        <p>{restaurant && restaurant.deliveryTime - 10} - {restaurant && restaurant.deliveryTime} min</p>
                        <p>Frete R${restaurant && restaurant.shipping},00</p>
                    </div>
                </div>
            </Container>
        </Link>
    )
}

export default CardProducts
