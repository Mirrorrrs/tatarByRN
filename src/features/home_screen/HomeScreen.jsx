import React from 'react';
import ContentView from "../../components/content_view/ContentView";
import ContentContainer from "../../components/content_container/ContentContainer";
import {ScrollView, StyleSheet, Text, View} from "react-native"
import HomePlaceCard from "../../components/home_place_card/HomePlaceCard";
import BottomNavigation from "../../components/bottom_navigation/BottomNavigation";

const HomeScreen = ({navigation}) => {
    return (
        <ContentView style={styles.homeWrapper}>
            <ScrollView style={{flex:1}}>
                <ContentContainer style={{marginBottom:15}}>
                    <Text style={styles.pageTitle}>Добро пожаловать!</Text>
                    <Text style={styles.pageSubtitle}>Город Казань</Text>
                    <View>
                        <Text style={styles.sectionTitle}>Лучшие места</Text>
                    </View>
                    <View>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                    </View>
                </ContentContainer>
            </ScrollView>
            <BottomNavigation navigation={navigation}/>
        </ContentView>
    );
};

const styles = StyleSheet.create({
    homeWrapper:{
        backgroundColor:"white"
    },

    homeCardStyle:{
        marginTop:16
    },

    pageTitle:{
        color:"#1A051D",
        fontFamily:"SFProDisplay-Bold",
        fontSize:22,
        marginTop: 15
    },

    pageSubtitle:{
        color:"#1A051D",
        fontFamily:"SFProDisplay-Light",
        fontSize:15,
        marginTop:8,
    },

    sectionTitle:{
        color:"#1A051D",
        fontFamily:"SFProDisplay-Medium",
        fontSize:18,
        marginTop:30
    }
})

export default HomeScreen;