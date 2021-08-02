import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToHome, goToSignUpAddress } from "../router/Coordinator"

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
    axios.post(`${BASE_URL}/signup`, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        clear()
        goToSignUpAddress(history)
    })
    .catch((err) => {
        console.log(err)
        alert("Algo de errado aconteceu!")
    })
}

export const placeOrder = (body, params, clear) => {
    console.log('body', body)
    console.log('id do restaurante', params)
    
    const headers = {
        headers: {
            auth: localStorage.getItem('token')
        }
    }
    axios.post(`${BASE_URL}/restaurants/${params}/order`, body, headers)

        .then((res) => {
            console.log(res.data)
            clear()
        })
        .catch((err) => {
            console.log(err)
            alert("Erro em requisitar!")
        })
}

