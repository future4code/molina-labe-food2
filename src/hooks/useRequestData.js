import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        getRequest()

    },[])



    const getRequest = () => {
        axios.get(url, {
            headers: {
                auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err.response)
                console.log('Ocorreu um erro!')

            })
    }

    return (data)
}

export default useRequestData
