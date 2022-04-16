import React from 'react';
import ContentView from "../../components/content_view/ContentView";
import {Dimensions, Image, ScrollView, StyleSheet, Text, View} from "react-native";
import BottomNavigation from "../../components/bottom_navigation/BottomNavigation";
import ContentContainer from "../../components/content_container/ContentContainer";
import CustomButton from "../../components/custom_button/CustomButton";
import Avatar from "../../assets/images/Avatar.png"
import RewardCard from "../../components/reward_card/RewardCard";

const width = Dimensions.get("window").width-20

const ProfileScreen = ({navigation}) => {
    return (
        <ContentView style={styles.profileWrapper}>
            <ScrollView>
                <ContentContainer>
                    <View style={styles.profileHeader}>
                        <Image source={Avatar}/>
                        <View>
                            <Text style={styles.profileName}>Настоящий поц</Text>
                        </View>
                    </View>
                    <CustomButton text={"Редактировать профиль"} white={true} style={{borderWidth:2, borderColor:"#00C48C", marginTop:20}}/>
                    <View style={styles.inventoryWrapper}>
                        <Text style={styles.inventoryTitle}>Мой инвентарь</Text>
                        <View style={styles.rewards}>
                            <RewardCard style={styles.rewardCard} image={require("../../assets/images/Reward.png")}/>
                            <RewardCard style={styles.rewardCard} image={require("../../assets/images/Reward.png")}/>
                            <RewardCard style={styles.rewardCard} image={require("../../assets/images/Reward.png")}/>
                            <RewardCard style={styles.rewardCard} image={require("../../assets/images/Reward.png")}/>
                            <RewardCard style={styles.rewardCard} image={require("../../assets/images/Reward.png")}/>
                            <RewardCard style={styles.rewardCard} image={require("../../assets/images/Reward.png")}/>
                            <RewardCard style={styles.rewardCard} image={require("../../assets/images/Reward.png")}/>
                            <RewardCard style={styles.rewardCard} image={require("../../assets/images/Reward.png")}/>
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