import React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import Cross from "../../assets/icons/Cross";
import MapIcon from "../../assets/icons/MapIcon";
import UserPosition from "../../assets/icons/UserPosition";
import InfoIcon from "../../assets/icons/InfoIcon";

export const CircledButton = ({style, children, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        width:48,
        height:48,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white",
        borderRadius:16
    }
})

export const CloseButton = ({onPress})=><CircledButton onPress={onPress} style={{backgroundColor:"rgba(0,196,140,0.2)"}}><Cross fill={"#00C48C"}/></CircledButton>
export const InfoButton = ({onPress})=><CircledButton onPress={onPress} style={{backgroundColor:"rgba(0,196,140,0.2)"}}><InfoIcon fill={"#00C48C"}/></CircledButton>
export const MapButton = ({onPress, style})=><CircledButton style={style} onPress={onPress}><MapIcon fill={"#00C48C"}/></CircledButton>
export const LocateButton = ({onPress, style})=><CircledButton style={[{backgroundColor:"#00C48C" },style]} onPress={onPress}><UserPosition fill={"white"}/></CircledButton>