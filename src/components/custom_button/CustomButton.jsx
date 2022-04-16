import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from "react-native";

const CustomButton = ({text, white=false, style, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, white && styles.buttonWhite, style]}>
            <Text style={[styles.buttonText,white && styles.buttonWhiteText]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button:{
        width:"100%",
        height:52,
        backgroundColor:"#00C48C",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:6
    },

    buttonWhite:{
        backgroundColor: "white"
    },

    buttonText:{
        color:"white",
        fontSize:16,
        fontFamily:"SFProDisplay-Medium"
    },

    buttonWhiteText:{
        color:"#00C48C"
    }
})

export default CustomButton;