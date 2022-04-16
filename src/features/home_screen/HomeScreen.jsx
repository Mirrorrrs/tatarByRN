import React, {useEffect} from 'react';
import ContentView from "../../components/content_view/ContentView";
import ContentContainer from "../../components/content_container/ContentContainer";
import {ScrollView, StyleSheet, Text, View} from "react-native"
import HomePlaceCard from "../../components/home_place_card/HomePlaceCard";
import BottomNavigation from "../../components/bottom_navigation/BottomNavigation";
import HomeToCard from "../../components/home_to_card/HomeToCard";
import Animated, {useAnimatedStyle, useSharedValue, withSpring, withTiming} from "react-native-reanimated";

const HomeScreen = ({navigation}) => {
    const left = useSharedValue(90)
    const placesStyle = useAnimatedStyle(()=>{
        return {
            marginLeft:withTiming(left.value,{duration:600})
        }
    },[])

    const walkStyle = useAnimatedStyle(()=>{
        return {
            marginLeft:withTiming(left.value,{duration:800})
        }
    },[])

    useEffect(()=>{
        left.value=-10
    },[])

    return (
        <ContentView style={styles.homeWrapper}>
            <ScrollView style={{flex:1}}>
                <ContentContainer>
                    <Text style={styles.pageTitle}>Добро пожаловать!</Text>
                    <Text style={styles.pageSubtitle}>Город Казань</Text>
                    <View>
                        <Text style={styles.sectionTitle}>Лучшие места</Text>
                    </View>
                </ContentContainer>
                    <Animated.ScrollView showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false} horizontal={true} style={[styles.cardsWrapper,placesStyle]}>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                        <HomePlaceCard style={styles.homeCardStyle}/>
                    </Animated.ScrollView>
                <ContentContainer>
                    <View>
                        <Text style={styles.sectionTitle}>Куда сходить</Text>
                    </View>
                </ContentContainer>
                <Animated.ScrollView showsVerticalScrollIndicator={false}
                            showsHorizontalScrollIndicator={false} horizontal={true} style={[styles.cardsWrapper,walkStyle]}>
                    <HomeToCard style={styles.homeToCardStyle}/>
                    <HomeToCard style={styles.homeToCardStyle}/>
                    <HomeToCard style={styles.homeToCardStyle}/>
                    <HomeToCard style={styles.homeToCardStyle}/>
                    <HomeToCard style={styles.homeToCardStyle}/>
                    <HomeToCard style={styles.homeToCardStyle}/>
                    <HomeToCard style={styles.homeToCardStyle}/>
                    <HomeToCard style={styles.homeToCardStyle}/>

                </Animated.ScrollView>

            </ScrollView>
            <BottomNavigation navigation={navigation}/>
        </ContentView>
    );
};

const styles = StyleSheet.create({
    homeWrapper:{
        backgroundColor:"white"
    },

    cardsWrapper:{
        left:16,
        marginTop:16
    },

    homeToCardStyle:{
        marginTop:16,
        marginLeft:10
    },

    homeCardStyle:{
        marginTop:16,
        width:280,
        marginLeft:10
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
        marginTop:30,
    }
})

export default HomeScreen;