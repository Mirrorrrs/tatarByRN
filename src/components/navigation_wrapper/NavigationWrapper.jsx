import React, {useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Intro from "../../screens/Intro.jsx"
import {Easing} from "react-native"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Auth from "../../screens/Auth";
import Home from "../../screens/Home";
import Map from "../../screens/Map";
import ArScene from "../../screens/ArScene";
import {setFirstVisit, setToken, setUserRegion} from "../../store/actions/UserActions";
import {useDispatch, useSelector} from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from "../../screens/Profile";
import Geolocation from "@react-native-community/geolocation";

const config = {
    animation:"timing",
    config:{
        duration:500,
        easing:Easing.linear
    }
}

const NavigationWrapper = () => {
    const Stack = createNativeStackNavigator()
    const dispatch = useDispatch()
    const firstTime = useSelector(state => state.user.firstVisit)
    const checkData = async ()=>{
        const firstVisit = await AsyncStorage.getItem("firstTime")
        const authToken = await AsyncStorage.getItem("token")
        if (firstVisit!="true"){
            dispatch(setFirstVisit(false))
        }else{
            dispatch(setFirstVisit(true))
        }
        if (authToken){
            dispatch(setToken(authToken))
        }
        Geolocation.getCurrentPosition(pos=>{
            dispatch(setUserRegion(pos.coords))
        })
    }
    useEffect( ()=>{
        checkData()
    },[checkData])

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={!firstTime ? 'intro' : 'home'} screenOptions={{headerShown: false, transitionSpec:{
                open:config,
                    close:config
                }}} >
                <Stack.Screen name={'intro'} component={Intro}/>
                <Stack.Screen name={'auth'} component={Auth}/>
                <Stack.Screen name={'home'} component={Home}/>
                <Stack.Screen name={'map'} component={Map}/>
                <Stack.Screen name={'ar_scene'} component={ArScene}/>
                <Stack.Screen name={'profile'} component={Profile}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationWrapper;