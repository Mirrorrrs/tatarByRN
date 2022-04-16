import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import PlaceTest from "../../assets/images/PlaceTest.png";

const HomeToCard = ({style}) => {
    return (
        <View style={[styles.background,style]}>
            <View style={styles.cardBody}>
                <Text style={styles.cardText}>Покушать</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardBody:{
        width:150,
        height:180,
        padding:16,
        justifyContent:"flex-end",
        alignItems:"center",
        backgroundColor:"#FFA26B"
    },

    cardText:{
        color:"white",
        fontSize:17,
        fontFamily:"SFProDisplay-Medium"
    },

    background:{
        borderRadius:16,
        overflow:'hidden'
    }
})

export default HomeToCard;