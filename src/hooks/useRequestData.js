import { useEffect, useState } from "react";
import axios from "axios";
import { token } from "../constants/url"

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        getRequest()
    }, [])

    const getRequest = () => {
        axios.get(url, {
            headers: {
                auth: token
            }
        })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err.response)
                alert('Ocorreu um erro!')

            })
    }

    return (data)
}

export default useRequestData
