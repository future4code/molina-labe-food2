import React from 'react'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import CardRestaurant from '../../components/cards/CardRestaurants/CardRestaurant'
import search from '../../assets/search.svg'
import Header from '../../components/header/Header'
import { Container } from './styles'
import {useProtectedPage} from '../../hooks/useProtectedPage'

const HomePage = () => {
    useProtectedPage()
    const data = useRequestData([], `${BASE_URL}/restaurants`)
    const restaurants = data && data.restaurants
    console.log(restaurants)

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
                    return <CardRestaurant restaurants={restaurant} key={index} />
                })}
            </Container>
            <Header />
        </>
    )
}

export default HomePage
