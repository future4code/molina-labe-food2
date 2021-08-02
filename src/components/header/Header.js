import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from "./Style"
import HouseOutlinedIcon from '@material-ui/icons/HouseOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const Header = () => {
    return (
        <HeaderContainer>
            <a href="/"><span><HouseOutlinedIcon fontSize="large"/></span></a>
            <Link to="/carrinho"><span><ShoppingCartOutlinedIcon fontSize="large"/></span></Link>
            <Link to="/perfil"><span><PersonOutlineOutlinedIcon fontSize="large"/></span></Link>
        </HeaderContainer>
    )
}

export default Header
