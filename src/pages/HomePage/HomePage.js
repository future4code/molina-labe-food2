import React, { useState, useEffect } from 'react'
import search from '../../assets/search.svg'
import CardProducts from '../../components/cards/CardProducts/CardProducts'
import Header from '../../components/header/Header'
import { getRestaurants } from '../../services/get'

import { Container } from './styles'

const HomePage = () => {
    const [restaurants, setRestaurants] = useState()

    useEffect(() => {
        getRestaurants(setRestaurants)
    }, [])

    return (
        <>
            <Container>
                <div className='search'>
                    <img src={search} alt="search" />
                    <input type="text" placeholder='Restaurante' />
                </div>
                <div className='menu'>
                    {restaurants && restaurants.map(({ id, category }) => {
                        return <a href="" key={id}>{category}</a>
                    })}
                </div>
                {restaurants && restaurants.map((restaurant, index) => {
                    return <CardProducts restaurants={restaurant} key={index} />
                })}
                <CardProducts />
            </Container>
            <Header />
        </>
    )
}

export default HomePage
