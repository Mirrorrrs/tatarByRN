import {SET_FIRST_VISIT, SET_LOGIN, SET_TOKEN, SET_USER_REGION} from "../consts";
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
        let data = await $authHost.get("/api/profile")
        dispatch({
            type:SET_LOGIN,
            payload:data.data.username
        })
         data = await $authHost.get("/api/profile/items")
        return data.data

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

export const getPicks = (props) => async (dispatch)=>{
    try {
        const data = await $authHost.get("/api/items")
        return data.data.data
    }catch (e){
        throw e
    }
}
export const addCardToCollection = (props)=> async(dispatch)=>{
    try{
        const data = await $authHost.post(`/api/items/${props.id}/mint`)
    }catch (e) {

    }
}

export const saveUserData = (props)=> async(dispatch)=>{
    try{
        const data = await $authHost.post(`/api/profile`,props)
    }catch (e) {

    }
}

export const logoutUser = (props)=> async(dispatch)=>{
    try{
       await AsyncStorage.removeItem("token")
        dispatch({
            type:SET_TOKEN,
            payload:null
        })
        dispatch({
            type:SET_LOGIN,
            payload:""
        })
    }catch (e) {

    }
}