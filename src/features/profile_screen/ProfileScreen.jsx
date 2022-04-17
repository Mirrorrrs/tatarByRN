import React, {useEffect, useState} from 'react';
import ContentView from "../../components/content_view/ContentView";
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import BottomNavigation from "../../components/bottom_navigation/BottomNavigation";
import ContentContainer from "../../components/content_container/ContentContainer";
import CustomButton from "../../components/custom_button/CustomButton";
import Avatar from "../../assets/images/Avatar.png"
import RewardCard from "../../components/reward_card/RewardCard";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../store/actions/UserActions";
import CustomInput from "../../components/custom_input/CustomInput";

const width = Dimensions.get("window").width-20

const ProfileScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const username = useSelector(state=>state.user.login)
    const [ethWallet, setEthWallet] = useState("")
    const [cards,setCards] = useState([])
    const [profileRedact, setProfileRedact] = useState(false)
    const fetch = async()=>{
        const data = await dispatch(getUser())
        data.data && setCards(data.data)
    }
    const upload = async ()=>{

    }
    useEffect(()=>{fetch()},[fetch])
    return (
        <ContentView style={styles.profileWrapper}>
            <ScrollView>
                <ContentContainer>
                    <View style={styles.profileHeader}>
                        <Image source={Avatar}/>
                        <View>
                            <Text style={styles.profileName}>{username}</Text>
                        </View>
                    </View>
                    <CustomButton onPress={()=>setProfileRedact(state=>!state)} text={"Редактировать профиль"} white={true} style={{borderWidth:2, borderColor:"#00C48C", marginTop:20}}/>
                    {profileRedact && <View style={{marginTop:20}}>
                        <CustomInput onChangeText={val=>setEthWallet(val)} placeholder={"Eth wallet"}/>
                        <View style={{marginTop:20}}>
                            <CustomButton text={"Сохранить"}/>
                            <CustomButton white={true} text={"Выйти из аккаунта"}/>
                        </View>
                    </View>}
                    <View style={styles.inventoryWrapper}>
                        <Text style={styles.inventoryTitle}>Мой инвентарь</Text>
                        <View style={styles.rewards}>
                            {cards.map(el=>{
                                return   <RewardCard model={el.model} style={styles.rewardCard} image={el.image_url}/>

                            })}
                        </View>

                    </View>
                </ContentContainer>
            </ScrollView>
            <BottomNavigation navigation={navigation}/>
        </ContentView>
    );
};

const styles = StyleSheet.create({
    rewards:{
      flexDirection: "row",
        flexWrap:"wrap",
        marginLeft:-15,
        marginBottom: 20
    },
    rewardCard:{
      width:width/2-15,
        marginTop:15,
        marginLeft: 15,
    },

    inventoryTitle:{
        fontSize: 22,
        color:"black",
        fontFamily:"SFProDisplay-Medium",
        marginBottom:20
    },
    inventoryWrapper:{
        marginTop:40,
    },
    profileName:{
        marginLeft:15,
        color:"black",
        fontSize:16,
        fontFamily:"SFProDisplay-Medium"
    },
    profileHeader:{
      flexDirection:"row",
        alignItems:"center",
        marginTop:40
    },
    profileWrapper:{
        backgroundColor:"white"

    }
})

export default ProfileScreen;