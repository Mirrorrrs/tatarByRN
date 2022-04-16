import React from 'react';
import {StyleSheet, View, Text, ScrollView} from "react-native";
import ContentContainer from "../content_container/ContentContainer";
import MapView, {Marker} from "react-native-maps";
import CustomButton from "../custom_button/CustomButton";
import {useAnimatedStyle, useSharedValue} from "react-native-reanimated";

const BottomSlideUp = ({navigation}) => {
    const bottomPosition = useSharedValue(-100)

    const animatedStyles = useAnimatedStyle(()=>{
        return {
            bottom: bottomPosition.value
        }
    })
    return (
            <View style={[styles.slideUpBody,animatedStyles]} >
                <ScrollView style={styles.slideUpContent}>
                            <ContentContainer>
                                <Text style={styles.slideUpTitle}>Улица Баумана</Text>
                                <Text style={styles.slideUpSubtitle}>Достопримечательность</Text>
                                <View style={styles.article}>
                                    <Text style={styles.articleTitle}>История</Text>
                                    <Text style={styles.articleText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cupiditate et iusto praesentium quaerat ullam voluptates. Blanditiis culpa dicta eos, error maiores quia quis quod sed similique sint. Aspernatur blanditiis deleniti eligendi, iste laboriosam nemo neque nostrum praesentium sint voluptates. A animi aperiam aspernatur beatae dicta distinctio dolore eligendi eum in laboriosam libero minima minus nam optio perferendis quia quidem quis recusandae repellendus, sed similique sit totam voluptate! A aspernatur, corporis cumque dolorem doloremque eos et fugit ipsum iste iure nemo quas rerum sapiente sed, ullam. Ad asperiores dolore eaque earum enim nostrum odio odit officiis pariatur quam. Aspernatur atque commodi doloremque impedit magnam placeat quam similique tempore, vitae. Animi architecto at beatae dignissimos eum ex facere id in iste iusto laborum libero minima modi nam nulla numquam optio praesentium quibusdam rem repellat temporibus tenetur, ullam ut velit vitae voluptas voluptatum? Ab minima minus quos sunt ut! Error expedita fugit quasi rerum voluptas! Eos eum eveniet laudantium magni natus quaerat quisquam, rerum similique voluptatem voluptatum? Dolore eligendi iure laudantium nam repudiandae. Animi assumenda beatae dolores doloribus ea eligendi, eos eum exercitationem facere impedit labore necessitatibus neque nisi officia omnis quaerat, rem saepe soluta. Et, harum itaque non omnis praesentium voluptate?</Text>
                                </View>
                            </ContentContainer>

                            <View style={styles.mapContainer}>
                                <MapView
                                    style={styles.map}
                                    initialRegion={{
                                        latitude: 37.78825,
                                        longitude: -122.4324,
                                        latitudeDelta: 0.0922,
                                        longitudeDelta: 0.0421,
                                    }}
                                >
                                    <Marker
                                        coordinate={{
                                            latitude: 37.78825,
                                            longitude: -122.4324,
                                            latitudeDelta: 0.0922,
                                            longitudeDelta: 0.0421,
                                        }}
                                        title={"test"}
                                        image={require("../../assets/images/obama.png")}
                                        description={"text"}
                                        onPress={()=>{
                                            console.log("osiajfoajs");
                                        }
                                        }
                                    />
                                </MapView>
                            </View>
                        </ScrollView>
                <ContentContainer>
                    <CustomButton style={{marginBottom: 20}} onPress={()=>navigation.navigate("ar_scene")} text={"Собрать"}/>
                </ContentContainer>
            </View>

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
    map: {
        ...StyleSheet.absoluteFillObject,
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
        height:"50%",
        position:"absolute",
        paddingTop:18,
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