import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToHome } from "../router/Coordinator"

export const login = (body, clear, history) => {

    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }

    axios.post(`${BASE_URL}/login`, body, headers)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToHome(history)
    })
    .catch((err) => {
        console.log(err)
        alert("Senha e/ou Email, incorreto!")
    })
}

export const signup = (body, clear, history) => {

    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }

    axios.post(`${BASE_URL}/signup`, body, headers)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        // goToFeedPage(history)
    })
    .catch((err) => {
        console.log(err)
        alert("Senha e/ou Email, incorreto!")
    })
}

export const placeOrder = (body, clear, history) => {
    const token = localStorage.getItem('token')

    const headers = {
        headers:{
            Authorization: localStorage.getItem('token')
        }
    }

    axios.post(`${BASE_URL}/restaurants/:restaurantId/order`, body, headers)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        // goToFeedPage(history)
    })
    .catch((err) => {
        console.log(err)
        alert("Senha e/ou Email, incorreto!")
    })
}

