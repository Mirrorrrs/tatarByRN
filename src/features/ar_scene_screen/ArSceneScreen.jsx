import React, {useState} from 'react';
import {
    ViroARScene,
    ViroARSceneNavigator,
    ViroAnimations,
    ViroQuad,
    ViroSpotLight,
    ViroNode,
    Viro3DObject, ViroText, ViroBox, ViroAmbientLight,
} from '@viro-community/react-viro';
import {Alert, Image, StyleSheet, Text, View} from "react-native";
import ContentView from "../../components/content_view/ContentView";
import {InfoButton, MapButton} from "../../components/circled_button/CircledButton";
import BottomSlideUp from "../../components/bottom_slideup/BottomSlideUp";
import {useDispatch} from "react-redux";
import {addCardToCollection} from "../../store/actions/UserActions";




ViroAnimations.registerAnimations({
    loopRotate: {
        properties: {
            rotateY: '+=90'
        },
        duration: 600
    },

});



const models = {
    itpark:{
        source: require("../../assets/3dObjects/itpark/Ech.obj"),
        type:"OBJ",
        resources:[require("../../assets/3dObjects/itpark/MtlEch.mtl")],
        scale:[.8, .8, .8]
    }
}

const ArSceneScreen = ({navigation,route})=>{
    const {currentObject} = route.params;
    const currentModel = models[currentObject.model]
    const rotateAnimation = {name: 'loopRotate', run: true, loop: true}
    const dispatch = useDispatch()
    const [animation,setAnimation] = useState(rotateAnimation)
    const zoomAnimation = {name: 'zoom', run: true, loop: false}
    const handleCollect = async ()=>{
        Alert.alert(currentObject.name + " добавлено в коллекцию!")
        await dispatch(addCardToCollection({id:currentObject.id}))
        navigation.navigate("map")
    }
    return (
        <ViroARScene >
            <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1} />

            <ViroSpotLight
                innerAngle={5}
                outerAngle={90}
                direction={[0,-1,-.2]}
                position={[0, 3, 1]}
                color="#aaaaaa"
                castsShadow={true}
            />

            <ViroNode  position={[-0, -.5, -.5]} dragType="FixedToWorld" onDrag={()=>{}} >
                <ViroSpotLight
                    innerAngle={5}
                    outerAngle={45}
                    direction={[0,-1,-.2]}
                    position={[0, 3, 0]}
                    color="#ffffff"
                    castsShadow={true}
                    influenceBitMask={2}
                    shadowMapSize={2048}
                    shadowNearZ={2}
                    shadowFarZ={5}
                    shadowOpacity={.7} />
                        <Viro3DObject
                            source={currentModel.source}
                            position={[0, -.5, -1.5]}
                            dragType="FixedToWorld"
                            scale={currentModel.scale}
                            type={currentModel.type}
                            rotation={[30,0,0]}
                            animation={animation}
                            onClick={handleCollect}
                            lightReceivingBitMask={3}
                            shadowCastingBitMask={2}
                            transformBehaviors={[]}
                            resources={currentModel.resources}/>

                <ViroQuad
                    rotation={[-90,0,0]}
                    width={.5} height={.5}
                    arShadowReceiver={true}
                    color={"black"}
                    lightReceivingBitMask={2} />

            </ViroNode>

        </ViroARScene>
)
}

export default ({navigation, route})=>{
    const [bottomSlideOpened, setBottomSlideOpened] = useState(false)
    return (
        <ContentView>
            <View style={{flex:1, position:"relative"}}>
                <ViroARSceneNavigator initialScene={{scene:ArSceneScreen.bind(this,{navigation, route})}} style={{flex:1}}/>
                <MapButton onPress={()=>navigation.navigate("map")} style={{position:"absolute", right:16, bottom:16}}/>
            </View>
            <View style={styles.bottomInfo}>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    <Image style={styles.bottomImage} source={{uri:route.params.currentObject.image_url}}/>
                    <Text style={styles.bottomText}>{route.params.currentObject.name}</Text>
                </View>
                <InfoButton onPress={()=>setBottomSlideOpened(true)}/>
            </View>
            <BottomSlideUp showText={false} showButton={false} currentObject={route.params.currentObject} opened={bottomSlideOpened} close={()=>setBottomSlideOpened(false)} navigation={navigation}/>
        </ContentView>
    )
}

const styles = StyleSheet.create({
    bottomInfo:{
        width:"100%",
        backgroundColor:"white",
        padding:16,
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center"
    },

    bottomImage:{
        width: 64,
        height:64,
        borderRadius:8
    },

    bottomText:{
        marginLeft:16,
        color:"black",
        fontSize:17,
        fontWeight:"600"
    }
})
