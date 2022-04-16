import React from 'react';
import {StyleSheet, View} from "react-native";

const ContentContainer = ({children, style}) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16
    }
})

export default ContentContainer;