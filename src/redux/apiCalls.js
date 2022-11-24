import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import axios from 'axios'
import { publicRequest, userRequest } from '../../src/requestMethods'
import { getProductFailure, getProductStart, getProductSuccess, deleteProductStart, deleteProductSuccess, deleteProductFailure} from "./productRedux";

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

export const getProducts = async (dispatch)=>{
    dispatch(getProductStart());
    try {
        //const res = await axios.post("https://ecommerce-jfrs.herokuapp.com/api/auth/login",user);
        const res = await publicRequest.get("/products");
        dispatch(getProductSuccess(res.data))
    } catch (error) {
        dispatch(getProductFailure())
    }
}

export const deleteProduct = async (id, dispatch)=>{
    dispatch(deleteProductStart());
    try {
        //const res = await axios.post("https://ecommerce-jfrs.herokuapp.com/api/auth/login",user);
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id))
    } catch (error) {
        dispatch(deleteProductFailure())
    }
}