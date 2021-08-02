import React from 'react'
import { MainContainer, StyledLogo } from './styled'
import Logo from '../../assets/logoFutureEats.svg'



const SplashScreen = () => {
    return <div>
     <MainContainer>
            <StyledLogo src={Logo} />
        </MainContainer>
        </div>
}

export default SplashScreen
