import React from 'react'
import {ContainerIcon} from './style'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';

const ButtonBack = ({value}) => {
    const history = useHistory()

    return (
        <ContainerIcon value={value} onClick={()=>history.goBack()}>
            <ArrowBackIosIcon />
        </ContainerIcon>

    )
}

export default ButtonBack
