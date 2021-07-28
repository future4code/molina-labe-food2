import axios from "axios"
import { BASE_URL, token } from "../constants/url"

export const getProfile = (body, clear, history) => {
    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
    axios.get(`${BASE_URL}/profile`, body, headers)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
        })
        .catch((err) => {
            console.log(err)
            alert("Senha e/ou Email, incorreto!")
        })
}

export const getFullAddress = (body, clear, history) => {

    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }

    axios.get(`${BASE_URL}/profile/address`, body, headers)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
        })
        .catch((err) => {
            console.log(err)
            alert("Senha e/ou Email, incorreto!")
        })
}

export const getRestaurants = (setData) => {
    axios.get(`${BASE_URL}/restaurants`, { headers: { auth: token } })
        .then((res) => {
            setData(res.data.restaurants)
        })
        .catch((err) => {
            console.log(err)
            alert("Senha e/ou Email, incorreto!")
        })
}

export const getRestaurantDetail = (body, clear, history) => {
    // axios.get(`${BASE_URL}/restaurants/${restaurantId}`, body)
    // .then((res) => {
    //     localStorage.setItem("token", res.data.token)
    //     clear()
    //     goToFeedPage(history)
    // })
    // .catch((err) => {
    //     console.log(err)
    //     alert("Senha e/ou Email, incorreto!")
    // })
}

export const getActiveOrder = (setData) => {
    axios.get(`${BASE_URL}/active-order`, {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }) 
    .then((res) => {
        setData(res)
    })
    .catch((err) => {
            console.log('ACTIVE ORDER ERROR', err.response)
        })
}


export const ordersHistory = (body, clear, history) => {

    const headers = {
        headers: {
            Authorization: localStorage.getItem('token')
        }
    }
    axios.get(`${BASE_URL}/orders/history`, body, headers)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
        })
        .catch((err) => {
            console.log(err)
            alert("Senha e/ou Email, incorreto!")
        })
}






