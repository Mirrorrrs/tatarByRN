import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Map from "../../assets/icons/Map";
import Point from "../../assets/icons/Point";
import Inventory from "../../assets/icons/Inventory";
import Profile from "../../assets/icons/Profile";
import ContentContainer from "../content_container/ContentContainer";
import {useRoute} from "@react-navigation/native";
import {useSelector} from "react-redux";

const BottomNavigation = ({navigation}) => {
    const routeName = useRoute().name
    const token =useSelector(state=>state.user.token)
    return (
        <ContentContainer style={styles.bottomNavigationBody}>
            <TouchableOpacity style={styles.menuInner} onPress={()=>navigation.navigate("home")}>
                <Map fill={routeName==="home" ? "#00C48C" : "#858585"}/>
                <Text style={[styles.innerText, routeName==="home" && styles.innerTextActive]}>Гулять</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuInner} onPress={()=>{token===null?navigation.navigate("auth"):navigation.navigate("map")}}>
                <Point fill={routeName==="map" ? "#00C48C" : "#858585"}/>
                <Text style={[styles.innerText, routeName==="map" && styles.innerTextActive]}>Места</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuInner}>
                <Inventory/>
                <Text style={styles.innerText}>Инвентарь</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuInner} onPress={()=>{token===null?navigation.navigate("auth"):navigation.navigate("profile")}}>
                <Profile fill={routeName==="profile" ? "#00C48C" : "#858585"}/>
                <Text style={[styles.innerText,routeName==="profile" && styles.innerTextActive]}>Профиль</Text>
            </TouchableOpacity>

        </ContentContainer>
    );
};

const styles = StyleSheet.create({
    bottomNavigationBody:{
        width:"100%",
        paddingVertical:10,
        backgroundColor:"white",
        borderTopWidth:1,
        borderTopColor:"#EFEFEF",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-between'
    },

    innerTextActive:{
      color:"#00C48C",
    },

    menuInner:{
        width:"18%",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf:"stretch"
    },

    innerText:{
        fontSize:12,
        marginTop:4
    }
})

export default BottomNavigation;