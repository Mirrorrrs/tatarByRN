import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Intro from "../../screens/Intro.jsx"
import {Easing} from "react-native"
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Auth from "../../screens/Auth";
import Home from "../../screens/Home";
import Map from "../../screens/Map";
import ArScene from "../../screens/ArScene";

const config = {
    animation:"timing",
    config:{
        duration:500,
        easing:Easing.linear
    }
}

const NavigationWrapper = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'home'} screenOptions={{headerShown: false, transitionSpec:{
                open:config,
                    close:config
                }}} >
                <Stack.Screen name={'intro'} component={Intro}/>
                <Stack.Screen name={'auth'} component={Auth}/>
                <Stack.Screen name={'home'} component={Home}/>
                <Stack.Screen name={'map'} component={Map}/>
                <Stack.Screen name={'ar_scene'} component={ArScene}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default NavigationWrapper;