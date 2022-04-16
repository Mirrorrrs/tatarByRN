import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";

const RewardCard = ({image, style}) => {
    return (
        <TouchableOpacity style={[styles.cardBody, style]}>
            <Image source={image}/>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardBody:{
        height:195,
        backgroundColor:"rgba(229,229,229,0.24)",
        borderRadius:16,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default RewardCard;