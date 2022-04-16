import React, {useState} from 'react';
import ContentView from "../../components/content_view/ContentView";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import Logo from "../../assets/icons/Logo";
import CustomInput from "../../components/custom_input/CustomInput";
import CustomButton from "../../components/custom_button/CustomButton";
import GlobalStyles from "../../styles/GlobalStyles";

const AuthScreen = () => {
    const [authType, setAuthType] = useState(0)
    const changeType = (type)=>{
        setAuthType(type)
    }
    return (
        <ContentView style={styles.authView}>
            <View style={styles.logoWrapper}>
                <Logo/>
            </View>
            <View style={styles.viewForm}>
                <Text style={styles.formTitle}>{authType===0 ? 'Регистрация' : "Авторизация"}</Text>
                <View style={styles.formInputs}>
                    <CustomInput style={styles.formInput} placeholder={"Логин"}/>
                    <CustomInput style={styles.formInput} placeholder={"Пароль"}/>
                </View>
                {authType===1 && <Text style={[GlobalStyles.textLink,{marginTop:16}]} onPress={()=>{console.log("Пошел нахуй сука")}}>Забыли пароль?</Text>}
                <CustomButton style={styles.formButton} text={"Регистрация"}/>
                {authType===0 && <Text style={styles.bottomText}>Уже есть аккаунт? <Text style={GlobalStyles.textLink} onPress={()=>{changeType(1)}}>Войти</Text></Text> }
                {authType===1 && <Text style={styles.bottomText}>{"Еще нет аккаунта?\n"} <Text style={[GlobalStyles.textLink]} onPress={()=>{changeType(0)}}>Регистрация</Text></Text> }


            </View>
        </ContentView>
    );
};

const styles = StyleSheet.create({
    authView:{
        paddingHorizontal:27,
        backgroundColor:"white"
    },

    bottomText:{
      marginTop:16,
        textAlign:"center",
        lineHeight:22,
        fontSize: 13
    },

    logoWrapper:{
        width:"100%",
      alignItems:"center",
        top:20,
        alignSelf:"center",
      position:"absolute",
    },

    formButton:{
      marginTop:24
    },

    formInput:{
        marginTop: 16
    },

    formInputs:{
        marginTop:8
    },

    viewForm:{
        flex:1,
        justifyContent:'center',
        width:"100%"
    },

    formTitle:{
        fontWeight: "600",
        color:"black",
        marginTop: 48,
        fontSize: 22,
        fontFamily:"SFProDisplay-Bold"
    },
})

export default AuthScreen;