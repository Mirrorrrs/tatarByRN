import React from 'react';
import {View, ImageBackground, StyleSheet, Text} from "react-native";
import PlaceTest from "../../assets/images/PlaceTest.png"

const HomePlaceCard = ({style}) => {
    return (
        <ImageBackground source={PlaceTest} style={[styles.background,style]}>
            <View style={styles.cardBody}>
                <Text style={styles.cardText}>Название)</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    cardBody:{
        width:"100%",
        height:180,
        padding:16,
        justifyContent:"flex-end"
    },

    cardText:{
      color:"white",
      fontSize:22,
        fontFamily:"SFProDisplay-Medium"
    },

    background:{
        borderRadius:16,
        overflow:'hidden'
    }
})

export default HomePlaceCard;