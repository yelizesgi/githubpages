import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"
import { useNavigate } from "react-router-dom"
import {useDispatch} from "react-redux"
import {fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess} from "../features/authSlice"


const useAuthCall = () =>{
   const navigete = useNavigate()
   const dispatch = useDispatch()

   const login = async (userData) =>{

    dispatch(fetchStart())
    try {
        const {data} = await axios.post(`${import.meta.env.VITE_BASE_URL}/account/auth/login/`, userData)
        dispatch(loginSuccess(data))
        toastSuccessNotify("login islemi basarili")
        navigete("/stock")
    } catch (error) {
        console.log(error.message)
        dispatch(fetchFail())
        toastErrorNotify("login islemi basarisiz")
    }
   }

   const logout = async () =>{

    dispatch(fetchStart())
    try {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/account/auth/logout/`)
        dispatch(logoutSuccess())
        toastSuccessNotify("logout islemi basarili")
        navigete("/")
    } catch (error) {
        console.log(error.message)
        dispatch(fetchFail())
        toastErrorNotify("logout islemi basarisiz")
    }
   }

   const register = async (userData) =>{

    dispatch(fetchStart())
    try {
        const {data} = await axios.post(`${import.meta.env.VITE_BASE_URL}/account/register/`, userData)
        dispatch(registerSuccess(data))
        toastSuccessNotify("register islemi basarili")
        navigete("/stock")
    } catch (error) {
        console.log(error.message)
        dispatch(fetchFail())
        toastErrorNotify("register islemi basarisiz")
    }
   }

   return{login, logout, register}
}

export default useAuthCall