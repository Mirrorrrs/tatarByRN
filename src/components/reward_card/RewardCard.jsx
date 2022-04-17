import React, {useEffect} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import Animated, {useAnimatedStyle, useSharedValue, withSpring, withTiming} from "react-native-reanimated";

const models = {
    itpark:{
        source:require('../../assets/icons/Echpok.png'),
    }
}

const RewardCard = ({image, style, model}) => {
    const scale = useSharedValue(1.5)
    const borderRadius = useSharedValue(14)

    const animatedStyle = useAnimatedStyle(()=>{
        return {
            borderRadius:borderRadius.value,
            transform:[{scale:scale.value}]
        }
    },[])

    useEffect(()=>{
        borderRadius.value = withTiming(16,{duration:600})
        scale.value = withSpring(1)
    },[])
    return (
        <Animated.View style={[styles.cardBody, style, animatedStyle]}>
            <Image style={{width:"100%", height:"50%"}} source={models[model].source}/>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    cardBody:{
        height:195,
        backgroundColor:"rgba(229,229,229,0.24)",
        justifyContent:"center",
        alignItems:"center"
    }
})

export default RewardCard;