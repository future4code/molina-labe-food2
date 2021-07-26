import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator"

export const login = (body, clear, history) => {

    axios.post(`${BASE_URL}/login`, body)
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

export const signup = (body, clear, history) => {

    axios.post(`${BASE_URL}/signup`, body)
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

export const placeOrder = (body, clear, history) => {
    const token = localStorage.getItem('token')

    headers = {
        headers:{
            Authorization: token
        }
    }

    axios.post(`${BASE_URL}/restaurants/:restaurantId/order`, body)
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

