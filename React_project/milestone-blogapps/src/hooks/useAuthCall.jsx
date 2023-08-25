import axios from "axios"
import {toastErrorNotify, toastSuccessNotify} from "../helper/ToastNotify"
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import { fetchStart, fetchFail, loginSuccess, logoutSuccess, signUpSuccess } from "../features/authSlice"


const useAuthCall =() =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const login = async (userData) => {
        dispatch(fetchStart())
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BASE_URL}/account/auth/login/`, userData)
            dispatch(loginSuccess(data))
            toastSuccessNotify("login işlemi basarili olmustur")
            navigate("/")
        } catch (error) {
            console.log(error.message)
            dispatch(fetchFail())
            toastErrorNotify("Login islemi basarisiz")
        }
    } 

    const logout = async (userData) => {
        dispatch(fetchStart())
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BASE_URL}/account/auth/logout/`, userData)
            dispatch(logoutSuccess(data))
            toastSuccessNotify("logout işlemi başarılı olmuştur")
            navigate("/")
        } catch (error) {
            console.log(error.message)
            dispatch(fetchFail())
            toastErrorNotify("Logout islemi basarisiz")
        }
    } 

    const signUp = async (userData) => {
        dispatch(fetchStart())
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BASE_URL}/account/register/`, userData)
            dispatch(logoutSuccess(data))
            toastSuccessNotify("signup işlemi başarılı olmuştur")
            navigate("/")
        } catch (error) {
            console.log(error.message)
            dispatch(fetchFail())
            toastErrorNotify("signup islemi basarisiz")
        }
    }

    return{login, logout, signUp}
}

export default useAuthCall