import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from "./Style"
import HouseOutlinedIcon from '@material-ui/icons/HouseOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';


const Header = () => {
    return (
        <HeaderContainer>
            <Link to="/"><span><HouseOutlinedIcon color="disabled" fontSize="large"/></span></Link>
            <Link to="/carrinho"><span><ShoppingCartOutlinedIcon color="disabled" fontSize="large"/></span></Link>
            <Link to="/perfil"><span><PersonOutlineOutlinedIcon color="disabled" fontSize="large"/></span></Link>
        </HeaderContainer>
    )
}

export default Header
