import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import axios from 'axios'
import { publicRequest } from '../../src/requestMethods'

export const login = async (dispatch, user)=>{
    dispatch(loginStart());
    try {
        //const res = await axios.post("https://ecommerce-jfrs.herokuapp.com/api/auth/login",user);
        const res = await publicRequest.post("http://localhost:5000/api/auth/login",user);
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}