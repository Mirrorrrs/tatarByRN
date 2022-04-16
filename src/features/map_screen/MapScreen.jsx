import React from 'react';
import {View, StyleSheet, Text} from "react-native";
import ContentView from "../../components/content_view/ContentView";
import BottomNavigation from "../../components/bottom_navigation/BottomNavigation";
import MapView, {Marker} from 'react-native-maps';
import LinearGradient from 'react-native-linear-gradient';

const MapScreen = ({navigation}) => {
    return <ContentView>
        <LinearGradient  colors={[ 'rgb(255,255,255)', 'rgba(255,255,255,0.8)','rgba(255,255,255,0)']} style={styles.placeContainer}>
            <View style={styles.placeIndicator}>
                <Text style={styles.placeIndicatorText}>Казань</Text>
            </View>

        </LinearGradient>
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
        <BottomNavigation navigation={navigation}/>

    </ContentView>;
};

const styles = StyleSheet.create({

    placeIndicatorText:{
        fontFamily:"SFProDisplay-Medium",
        fontSize:15,
        color:"#00C48C"
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
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapScreen;