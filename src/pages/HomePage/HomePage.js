import React from 'react'
import search from '../../assets/search.svg'
import CardProducts from '../../components/cards/CardProducts/CardProducts'
import Header from '../../components/header/Header'

import { Container } from './styles'

const HomePage = () => {
    return (
        <>
            <Container>
                <div className='search'>
                    <img src={search} alt="search" />
                    <input type="text" placeholder='Restaurante' />
                </div>
                <div className='menu'>
                    <a href="">Burger</a>
                    <a href="">Asiática</a>
                    <a href="">Massas</a>
                    <a href="">Saudáveis</a>
                </div>
                <CardProducts />
                <CardProducts />
                <CardProducts />
            </Container>
            <Header />
        </>
    )
}

export default HomePage
