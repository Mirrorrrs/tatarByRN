import React, {useEffect, useMemo, useRef, useState} from 'react';
import {View, StyleSheet, Text, Alert} from "react-native";
import ContentView from "../../components/content_view/ContentView";
import BottomNavigation from "../../components/bottom_navigation/BottomNavigation";
import MapView, {Marker} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';
import BottomSlideUp from "../../components/bottom_slideup/BottomSlideUp";
import Geolocation from '@react-native-community/geolocation';
import UserPosition from "../../assets/icons/UserPosition";
import {LocateButton} from "../../components/circled_button/CircledButton";
import {useDispatch, useSelector} from "react-redux";
import {getPicks} from "../../store/actions/UserActions";

function measure(lat1, lon1, lat2, lon2){
    let R = 6378.137; // Radius of earth in KM
    let dLat = lat2 * Math.PI / 180 - lat1 * Math.PI / 180;
    let dLon = lon2 * Math.PI / 180 - lon1 * Math.PI / 180;
    let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    let d = R * c;
    return d * 1000; // meters
}

const MapScreen = ({navigation}) => {
    const [bottomSlideOpened, setBottomSlideOpened] = useState(false)
    const userRegion = useSelector(state=>state.user.userRegion)
    const [bottomTitle, setBottomTitle] = useState("")
    const [currentCords, setCurrentCords] = useState([])
    const [currentObject, setCurrentObject] = useState({})
    const mapRef= useRef(null)
    const [geolocation, setGeolocation] = React.useState(userRegion);
    const [picks, setPicks] = useState([])
    const dispatch = useDispatch()


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

    const fetch = async ()=>{
        try{
            const data = await dispatch(getPicks())
            setPicks(data)
        }catch (e) {
            Alert.alert("Ошибка сервера")
        }
    }

    const showSlideUpButton = useMemo(()=>{
        return (measure(geolocation.latitude, geolocation.longitude, currentCords[0], currentCords[1])<300)
    },[currentCords])

    useEffect(()=>{
        fetch()
    },[fetch])


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
                        setBottomTitle()
                    }
                    }
                />

                {picks && picks.map(el=>{
                    return  <Marker
                        coordinate={{
                            latitude: parseFloat(el.latitude),
                            longitude: parseFloat(el.longitude),
                            latitudeDelta: 0,
                            longitudeDelta:  0,
                        }}
                        showsUserLocation={true}
                        title={el.name}
                        image={require("../../assets/icons/PickPoint.png")}
                        onPress={()=>{
                            setBottomSlideOpened(true)
                            setCurrentObject(el)
                            setCurrentCords([parseFloat(el.latitude),parseFloat(el.longitude)])
                        }
                        }
                    />

                })}


                <Marker title={"Ваша позиция"} coordinate={{latitude:geolocation.latitude, longitude:geolocation.longitude}} flat anchor={{ x: 0.5, y: 0.5 }}>
                    <UserPosition fill={"red"}/>
                </Marker>
            </MapView>
        </View>
        <BottomNavigation navigation={navigation}/>
        <BottomSlideUp showButton={showSlideUpButton} currentObject={currentObject} opened={bottomSlideOpened} close={()=>setBottomSlideOpened(false)} navigation={navigation}/>
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