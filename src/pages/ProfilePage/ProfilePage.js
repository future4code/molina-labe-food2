import React from 'react'
import CardHistory from '../../components/cards/CardHistory/CardHistory'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'


const ProfilePage = () => {
    useProtectedPage()
    const history = useHistory()
    const profile = useRequestData({}, `${BASE_URL}/perfil`)
    const order = useRequestData({}, `${BASE_URL}/pedido`)


    return (
        <CardHistory
        key={profile.id}
        name={profile.name}
        email={profile.email}
        cpf={profile.cpf}
        // onClick={() =}
        />
        
    )
}

export default ProfilePage
