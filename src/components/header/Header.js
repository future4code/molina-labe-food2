import React from 'react'
import { HeaderContainer } from "./Style"
import HouseOutlinedIcon from '@material-ui/icons/HouseOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const Header = () => {
    return (
        <HeaderContainer>
            <a href="http://localhost:3000/"><span><HouseOutlinedIcon fontSize="large"/></span></a>
            <a href="http://localhost:3000/carrinho"><span><ShoppingCartOutlinedIcon fontSize="large"/></span></a>
            <a href="http://localhost:3000/perfil"><span><PersonOutlineOutlinedIcon fontSize="large"/></span></a>
        </HeaderContainer>
    )
}

export default Header
