import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text} from "react-native";
import ContentView from "../../components/content_view/ContentView";
import BottomNavigation from "../../components/bottom_navigation/BottomNavigation";
import MapView, {Marker} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import BottomSlideUp from "../../components/bottom_slideup/BottomSlideUp";
import Geolocation from '@react-native-community/geolocation';
import UserPosition from "../../assets/icons/UserPosition";
import {LocateButton} from "../../components/circled_button/CircledButton";
import {useSelector} from "react-redux";

const MapScreen = ({navigation}) => {
    const [bottomSlideOpened, setBottomSlideOpened] = useState(false)
    const userRegion = useSelector(state=>state.user.userRegion)
    const mapRef= useRef(null)
    const [geolocation, setGeolocation] = React.useState(userRegion);

    const locateMap = (loc, zoom=15)=>{
        if (mapRef.current) {
            const newCamera = {
                center: { latitude: loc.latitude, longitude:loc.longitude },
                zoom: zoom,
                heading: 0,
                pitch: 0,
                altitude: 5
            }

            mapRef.current.animateCamera(newCamera, { duration: 1000 });

        }
    }

    useEffect(()=>{
        locateMap(userRegion,10)
    },[mapRef.current])


    useEffect(()=>{
        const watchId = Geolocation.watchPosition((position) => {
            setGeolocation(position.coords);
        });
        return () => Geolocation.clearWatch(watchId);
    })
    return <ContentView>
        <LinearGradient  colors={[ 'rgb(255,255,255)', 'rgba(255,255,255,0.8)','rgba(255,255,255,0)']} style={styles.placeContainer}>
            <View style={styles.placeIndicator}>
                <Text style={styles.placeIndicatorText}>Казань</Text>
            </View>

        </LinearGradient>
        <View style={styles.mapContainer}>
            <LocateButton onPress={()=>locateMap(geolocation)} style={styles.locateButton}/>
            <MapView
                ref={(current) => mapRef.current = current}
                style={styles.map}
            >
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showsUserLocation={true}
                    title={"test"}
                    image={require("../../assets/icons/PickPoint.png")}
                    description={"text"}
                    onPress={()=>{
                        setBottomSlideOpened(true)
                    }
                    }
                />

                <Marker title={"Ваша позиция"} coordinate={{latitude:geolocation.latitude, longitude:geolocation.longitude}} flat anchor={{ x: 0.5, y: 0.5 }}>
                    <UserPosition fill={"red"}/>
                </Marker>
            </MapView>
        </View>
        <BottomNavigation navigation={navigation}/>
        <BottomSlideUp opened={bottomSlideOpened} close={()=>setBottomSlideOpened(false)} navigation={navigation}/>
    </ContentView>;
};

const styles = StyleSheet.create({

    placeIndicatorText:{
        fontFamily:"SFProDisplay-Medium",
        fontSize:15,
        color:"#00C48C"
    },

    locateButton:{
        position:"absolute",
        bottom:20,
        right:20,
        zIndex: 100
    },

    placeIndicator:{
      width:169,
        height:48,
        backgroundColor: "rgba(0,196,140,0.16)",
        borderRadius:16,
        alignItems:"center",
        justifyContent: "center"

    },

    placeContainer:{
      position:"absolute",
      width:"100%",
      alignItems: "center",
      paddingTop:20,
        paddingBottom:40,
        zIndex:1,

    },
    mapContainer: {
        flex:1,
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: "relative"
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapScreen;