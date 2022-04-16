import {SET_FIRST_VISIT, SET_TOKEN} from "../consts";
import {$host} from "../../http/http";
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
        console.log(token);
        dispatch({
            type:SET_TOKEN,
            payload:token
        })
    }catch (e) {
        console.log(e)
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
        console.log(e);
    }
}