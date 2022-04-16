import React, {useCallback, useState} from 'react';
import ContentView from "../../components/content_view/ContentView";
import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import Logo from "../../assets/icons/Logo";
import CustomInput from "../../components/custom_input/CustomInput";
import CustomButton from "../../components/custom_button/CustomButton";
import GlobalStyles from "../../styles/GlobalStyles";
import {useDispatch, useSelector} from "react-redux";
import {Alert} from "react-native"
import {authUser, registerUser} from "../../store/actions/UserActions";

const AuthScreen = ({navigation}) => {
    const [authType, setAuthType] = useState(0)
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const token = useSelector(state=>state.user.token)
    console.log(token);
    const dispatch = useDispatch()
    const changeType = (type)=>{
        setAuthType(type)
    }
    const sendData = useCallback(async()=>{
        try{
            if (authType===0){
                await dispatch(registerUser({
                    username:username,
                    password:password
                }))
            }else{
                await dispatch(authUser({
                    username:username,
                    password:password
                }))
            }
            navigation.navigate("profile")
        }catch (e){
            Alert.alert("Проверьте правильность данных")
        }

    }, [authType, username, password])
    return (
        <ContentView style={styles.authView}>
            <View style={styles.logoWrapper}>
                <Logo/>
            </View>
            <View style={styles.viewForm}>
                <Text style={styles.formTitle}>{authType===0 ? 'Регистрация' : "Авторизация"}</Text>
                <View style={styles.formInputs}>
                    <CustomInput style={styles.formInput} onChangeText={(val)=>setUsername(val)} placeholder={"Логин"}/>
                    <CustomInput style={styles.formInput} onChangeText={(val)=>setPassword(val)} placeholder={"Пароль"}/>
                </View>
                {authType===1 && <Text style={[GlobalStyles.textLink,{marginTop:16}]} onPress={()=>{console.log("Пошел нахуй сука")}}>Забыли пароль?</Text>}
                <CustomButton style={styles.formButton} onPress={sendData} text={authType===0 ? "Зарегистрироваться" : "Войти"}/>
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