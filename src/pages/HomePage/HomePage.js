import React, { useState, useEffect } from 'react'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import CardRestaurant from '../../components/cards/CardRestaurants/CardRestaurant'
import search from '../../assets/search.svg'
import Header from '../../components/header/Header'
import { Container } from './styles'
import Carousel from 'react-elastic-carousel'
import OrderInProgress from '../../components/OrderInProgress/OrderInProgress';
import { useProtectedPage } from '../../hooks/useProtectedPage'

const HomePage = () => {
    useProtectedPage()
    const data = useRequestData([], `${BASE_URL}/restaurants`)
    const restaurants = data && data.restaurants
    const [filtered, setFiltered] = useState()
    const order = useRequestData([], `${BASE_URL}/active-order`)

    useEffect(() => {
        setFiltered(restaurants)
    }, [data])

    const handleCategory = (category) => {
        const filterCategory = restaurants.filter((restaurant) => {
            return category === restaurant.category
        })
        setFiltered(filterCategory)
    }

    return (
        <>
        
            <Container>
                <div className='header'>
                    <h1>Rappi4</h1>
                </div>
                <hr className='row' />
                <div className='search'>
                    <img src={search} alt="search" />
                    <input type="text" placeholder='Restaurante' />
                </div>
                <div className='menu'>
                    <Carousel itemsToShow={3} pagination={false} showArrows={false} >
                        {restaurants && restaurants.map(({ id, category }) => {
                            return <button key={id} onClick={() => handleCategory(category)}>{category}</button>
                        })}
                    </Carousel>
                </div>
                {filtered && filtered.map((restaurant, index) => {
                    return <CardRestaurant restaurants={restaurant} key={index} />
                })}
                {order.order === null ? <div></div> : <OrderInProgress />}
            </Container>
            <Header />
        </>
    )
}

export default HomePage