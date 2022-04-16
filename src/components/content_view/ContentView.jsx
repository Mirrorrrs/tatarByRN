import React from 'react';
import {StyleSheet, View} from "react-native";

const ContentView = ({children, style}) => {
    return (
        <View style={[styles.container, style]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})

export default ContentView;