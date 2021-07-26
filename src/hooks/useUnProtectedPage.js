import { useHistory } from "react-router-dom"
import { useEffect } from "react"

export const useUnprotectedPage = () => {
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token) {
      history.push('/')
    }
  }, [])
}