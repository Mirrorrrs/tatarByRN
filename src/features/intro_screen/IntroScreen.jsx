import React, {useCallback, useRef} from 'react';
import {Image, StyleSheet, Text, View} from "react-native"
import AppIntroSlider from "react-native-app-intro-slider";
import Compass from "../../assets/icons/Compass.png"
import ChairAndUmbrella from "../../assets/icons/ChairAndUmbrella.png"
import Map from "../../assets/icons/Map.png"
import ContentView from "../../components/content_view/ContentView";
import CustomButton from "../../components/custom_button/CustomButton";
import GlobalStyles from "../../styles/GlobalStyles";
import {useDispatch} from "react-redux";
import {setFirstVisit} from "../../store/actions/UserActions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const slides = [
    {
        key: 0,
        title: 'Исследуйте город',
        text: 'Достопримечательности, места, которые стоит посетить - все это есть в нашем приложении',
        image: Map,
        backgroundColor: '#59b2ab',
    },
    {
        key: 1,
        title: 'Откройте для себя мир с AR',
        text: 'С помощью AR-технологий исследования и путешествия станут только интереснее!',
        image: ChairAndUmbrella,
        backgroundColor: '#febe29',
    },
    {
        key: 2,
        title: 'Готовы к путешествию?',
        text: 'Пройдите регистрацию и начните путешествовать прямо сейчас!',
        image: Compass,
        backgroundColor: '#22bcb5',
    }
];

const IntroScreen = ({navigation}) => {
    const sliderRef = useRef()
    const dispatch = useDispatch()
    const renderPagination = (activeIndex)=>{
        return <View style={styles.customPaginationView}>
            <View style={[styles.customPaginationDot, activeIndex===0 && styles.customPaginationDotActive]}></View>
            <View style={[styles.customPaginationDot, activeIndex===1 && styles.customPaginationDotActive]}></View>
            <View style={[styles.customPaginationDot, activeIndex===2 && styles.customPaginationDotActive]}></View>
        </View>
    }
    const startApp = async () => {
        dispatch(setFirstVisit(true))
        AsyncStorage.setItem("firstTime", "true")
        navigation.navigate("home")
    }
    const renderItems = useCallback(({item})=>{
        return (
            <ContentView style={styles.slideView}>
                <Image source={item.image} style={styles.slideImage}/>
                <Text style={styles.slideTitle}>{item.title}</Text>
                <Text style={styles.slideText}>{item.text}</Text>
                <View style={styles.slideButtons}>
                    <CustomButton text={"Далее"} onPress={()=>item.key!==2 ? sliderRef.current.goToSlide(item.key+1):startApp()}/>
                    <CustomButton style={{marginTop:16}} text={"Пропустить"} white={true}/>
                </View>
            </ContentView>

        )
    },[sliderRef])
    return (<AppIntroSlider ref={sliderRef} renderPagination={renderPagination} showNextButton={false} showDoneButton={false} showPrevButton={false} showSkipButton={false} dotStyle={{display:"none"}} renderItem={renderItems} data={slides}/>);
};

const styles = StyleSheet.create({
    slideView:{
        backgroundColor:"white",
        alignItems:"center",
        paddingHorizontal:38,
        position:"relative"
    },

    customPaginationView:{
      width: "100%",
      justifyContent: "center",
        flexDirection:"row",
      position:"absolute",
      top:"67%",
        marginLeft: -16
    },

    customPaginationDot:{
        width:8,
        height:8,
        borderRadius:100,
        backgroundColor: "#ECEBED",
        marginLeft:16
    },

    customPaginationDotActive:{
        backgroundColor:"#00C48C"
    },

    slideImage:{
        marginTop:"30%"
    },

    slideButtons:{
      width:"100%",
        position:"absolute",
        bottom:40
    },

    slideTitle:{
        fontWeight: "600",
        color:"black",
        marginTop: 48,
        fontSize: 22,
        fontFamily:"SFProDisplay-Medium"
    },

    slideText:{
        fontSize: 15,
        fontWeight: "600",
        color:"#3F3356",
        textAlign:"center",
        lineHeight:20,
        marginTop: 14,
        fontFamily:"SFProDisplay-Light"
    }
})

export default IntroScreen;