import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import SignupAddressPage from '../pages/SignupAddressPage/SignupAddressPage'
import CartPage from '../pages/CartPage/CartPage'
import UpdateProfilePage from '../pages/UpdateProfilePage/UpdateProfilePage'
import UpdateAdressPage from '../pages/UpdateAdressPage/UpdateAdressPage'
import OrderPage from '../pages/OrderPage/OrderPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'


const Router = () => {
    return (
        <BrowserRouter>
            <Switch> 
                <Route exact path={'/'}>
                    <HomePage/>
                </Route>

                <Route exact path={'/login'}>
                    <LoginPage/>
                </Route>

                <Route exact path={'/cadastrar'}>
                    <SignupPage/>
                </Route>

                <Route exact path={'/cadastrar/endereco'}>
                    <SignupAddressPage/>
                </Route>

                <Route exact path={'/carrinho'}>
                    <CartPage/>
                </Route>

                <Route exact path={'/editar'}>
                    <UpdateProfilePage/>
                </Route>

                <Route exact path={'/editar-endereco'}>
                    <UpdateAdressPage/>
                </Route>

                <Route exact path={'/restaurante/:restaurantId'}>
                    <OrderPage/>
                </Route>

                <Route exact path={'/perfil'}>
                    <ProfilePage/>
                </Route>

                <Route>
                    <div>Pagina não encontrada!</div>
                    
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router