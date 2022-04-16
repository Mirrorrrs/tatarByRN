import {SET_FIRST_VISIT, SET_TOKEN, SET_USER_REGION} from "../consts";
import {$authHost, $host} from "../../http/http";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const setFirstVisit = (props)=>async (dispatch)=>{
    dispatch({
        type:SET_FIRST_VISIT,
        payload:props
    })
}

export const authUser = (props)=>async (dispatch)=>{
    try{
        const data = await $host.post("/auth/sign-in",{
            username:props.username,
            password:props.password
        })
        const token = data.data.token
        await AsyncStorage.setItem("token", token)
        dispatch({
            type:SET_TOKEN,
            payload:token
        })
    }catch (e) {
        throw e
    }
}

export const registerUser = (props)=> async (dispatch)=>{
    try{
        const data = await $host.post("/auth/sign-up",{
            username:props.username,
            password:props.password
        })
        const token = data.data.token
        await AsyncStorage.setItem("token", token)
        dispatch({
            type:SET_TOKEN,
            payload:token
        })
    }catch (e) {
        throw e
    }
}

export const getUser = ()=>async(dispatch)=>{
    try{
        const data = await $authHost.get("/api/profile")
        console.log(data);
    }catch (e) {
        console.log(e);
    }
}

export const setToken = (params) => dispatch=>{
    dispatch({
        type:SET_TOKEN,
        payload:params
    })
}

export const setUserRegion = (props) => (dispatch)=>{
    dispatch({
        type:SET_USER_REGION,
        payload:props
    })
}