import { responsiveFontSizes } from "@material-ui/core"
import axios from "axios"
import { BASE_URL } from "../constants/url"
import { goToHome } from "../router/Coordinator"
/* import { goToFeedPage } from "../router/Coordinator" */

export const addAdress = (body, clear, history) => {
    const token = localStorage.getItem('token')

   const headers = {
        headers:{
            auth: localStorage.getItem('token')
        }
    }

    axios.put(`${BASE_URL}/address`, body, headers)
    .then((res) => {
        clear()
        goToHome(history)
        console.log('ADD ADRESS', res)
    })
    .catch((err) => {
        console.log(err.response)
    })
}

export const updateProfile = (body, clear, history) => {
    const token = localStorage.getItem('token')

   const headers = {
        headers:{
            auth: localStorage.getItem('token')
        }
    }

    axios.put(`${BASE_URL}/profile`, body, headers)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        console.log('UPDATE PROFILE', res)
        clear()
        /* goToFeedPage(history) */
    })
    .catch((err) => {
        console.log(err.response)
        /* alert("Senha e/ou Email, incorreto!") */
    })
}