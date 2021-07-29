import React from 'react'
import CardHistory from '../../components/cards/CardHistory/CardHistory'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { useHistory } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/url'
import { goToEdit } from '../../router/Coordinator'

const ProfilePage = () => {
    useProtectedPage()
    const history = useHistory()
    const profile = useRequestData({}, `${BASE_URL}/perfil`)
    const order = useRequestData([], `${BASE_URL}/pedido`)


    return (
        <CardHistory
        key={profile.user.id}
        name={profile.user.name}
        email={profile.user.email}
        cpf={profile.user.cpf}
        onClick={() => goToEdit(history)}
        />
        
    )
}

export default ProfilePage
