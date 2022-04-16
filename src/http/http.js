
const url = process.env["APP_PORT"]

import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const $authHost = axios.create({
    baseURL:"http://192.168.43.105:8000"
})

const $host = axios.create({
    baseURL:"http://192.168.43.105:8000"
})

$authHost.interceptors.request.use(async (config)=>{
    const token = await AsyncStorage.getItem("token") || ""
    config.headers.authorization = "Bearer " + token
    return config
});

$authHost.interceptors.response.use(response => {
    return response;
}, async error => {
    throw error;
});


export {$authHost,$host}