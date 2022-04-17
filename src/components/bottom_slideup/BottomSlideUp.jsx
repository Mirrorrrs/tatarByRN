import React, {useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView, Dimensions, Alert, Image} from "react-native";
import ContentContainer from "../content_container/ContentContainer";
import MapView, {Marker} from "react-native-maps";
import CustomButton from "../custom_button/CustomButton";
import Animated, {useAnimatedStyle, useSharedValue, withSpring, withTiming} from "react-native-reanimated";
import {CloseButton} from "../circled_button/CircledButton";
import Tts from "react-native-tts";
import {useDispatch} from "react-redux";
import {getPicks} from "../../store/actions/UserActions";

const height = -Math.floor(Dimensions.get("window").height)


const BottomSlideUp = ({navigation, opened, close, currentObject, showButton, showText=true}) => {
    const bottomPosition = useSharedValue(height)
    const dispatch = useDispatch()
    const animatedStyles = useAnimatedStyle(()=>{
        return {
            bottom: withTiming(bottomPosition.value)
        }
    },[])
    
    useEffect(()=>{
        opened ? bottomPosition.value = 0 : bottomPosition.value = height
    },[opened])
    

    return (
            <Animated.View style={[styles.slideUpBody,animatedStyles]} >
                <ScrollView style={styles.slideUpContent}>
                            <ContentContainer>
                                <View style={{flexDirection:"row", justifyContent: "space-between"}}>
                                    <View>
                                        <Text style={styles.slideUpTitle}>{currentObject.name}</Text>
                                        <Text style={styles.slideUpSubtitle}>Достопримечательность</Text>
                                    </View>

                                    <CloseButton onPress={close}/>
                                </View>

                                <View style={styles.article}>
                                    <Text style={styles.articleTitle}>История</Text>
                                    <Text style={styles.articleText}>{currentObject.description}</Text>
                                </View>
                            </ContentContainer>

                            <View style={styles.mapContainer}>
                                <Image style={styles.bottomImage} source={{uri:currentObject.image_url}}/>
                            </View>
                        </ScrollView>
                <ContentContainer style={{backgroundColor: "white",paddingTop: 20}}>
                    {showButton ?
                        <CustomButton style={{marginBottom: 20}} onPress={()=>navigation.navigate("ar_scene",{
                            currentObject:currentObject
                        })} text={"Собрать"}/>: showText && <Text style={{textAlign:"center", marginBottom:20}}>Вы должны находиться в радиусе 150м от объекта</Text>}
                </ContentContainer>

            </Animated.View>

    );
};

const styles = StyleSheet.create({

    mapContainer: {
        width: "100%",
        height:220,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop:30,
        marginBottom:40
    },

    bottomImage:{
      width:"100%",
      height:"100%",
    },

    articleText:{
      fontSize:13,
        fontFamily:"SFProDisplay-Light",
        lineHeight:20,
        marginTop:10,
    },

    articleTitle:{
        fontSize:15,
        color:"black",
        fontFamily:"SFProDisplay-Medium",
    },

    article:{
        marginTop:20,
    },

    slideUpBody:{
        width:"100%",
        height:"80%",
        position:"absolute",
        paddingTop:18,
        bottom:-100,
        zIndex:1000,
        backgroundColor:'white',
    },

    slideUpContent:{
      flex:1,
    },

    slideUpTitle:{
        fontSize:17,
        color:"black",
        fontFamily:"SFProDisplay-Medium",
    },

    slideUpSubtitle:{
        color:"#858585",
        fontSize: 12,
        marginTop:5,
        fontFamily:"SFProDisplay-Light",
    }
})

export default BottomSlideUp;