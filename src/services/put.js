import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator"

export const addAdress = (body, clear, history) => {
    const token = localStorage.getItem('token')

    headers = {
        headers:{
            Authorization: token
        }
    }

    axios.put(`${BASE_URL}/address`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeedPage(history)
    })
    .catch((err) => {
        console.log(err)
        alert("Senha e/ou Email, incorreto!")
    })
}

export const updateProfile = (body, clear, history) => {
    const token = localStorage.getItem('token')

    headers = {
        headers:{
            Authorization: token
        }
    }

    axios.put(`${BASE_URL}/profile`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToFeedPage(history)
    })
    .catch((err) => {
        console.log(err)
        alert("Senha e/ou Email, incorreto!")
    })
}