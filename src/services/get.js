import axios from "axios"
import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../routes/coordinator"

export const getProfile = (body, clear, history) => {
    axios.get(`${BASE_URL}/profile`, body)
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

export const getFullAddress = (body, clear, history) => {
    axios.get(`${BASE_URL}/profile/address`, body)
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

export const getRestaurants = (body, clear, history) => {
    axios.get(`${BASE_URL}/restaurants`, body)
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

export const getRestaurantDetail = (body, clear, history) => {
    axios.get(`${BASE_URL}/restaurants/${restaurantId}`, body)
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

export const getActiveOrder = (body, clear, history) => {
    axios.get(`${BASE_URL}/active-order`, body)
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

export const ordersHistory = (body, clear, history) => {
    axios.get(`${BASE_URL}/orders/history`, body)
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






