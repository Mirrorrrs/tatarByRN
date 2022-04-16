import React from 'react';
import {StyleSheet, TextInput} from "react-native"

const CustomInput = ({placeholder, style}) => {
    return (
        <TextInput style={[styles.input, style]} selectionColor={'#3F3356'} placeholder={placeholder}/>
    );
};

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:"#ECEBED",
        borderRadius:6,
        paddingHorizontal:16,
        paddingVertical:10,
        color:"#3F3356",
        fontFamily:"SFProDisplay-Medium",
    }
})

export default CustomInput;