import React from 'react';
import {
    ViroARScene,
    ViroARSceneNavigator,
    ViroAnimations,
    ViroQuad,
    ViroSpotLight,
    ViroNode,
    Viro3DObject, ViroText, ViroBox, ViroAmbientLight,
} from '@viro-community/react-viro';
import {View} from "react-native";

ViroAnimations.registerAnimations({
    loopRotate: {
        properties: {
            rotateY: '+=45'
        },
        duration: 600
    },
});

const models = {
    itpark:{
        source:require('../../assets/3dObjects/itpark/эчпоч.obj'),
        type:"OBJ",
        resources:[require("../../assets/3dObjects/itpark/эчпоч.mtl")],
        scale:[.8, .8, .8]
    }
}

const ArSceneScreen = ({navigation,route})=>{
    const {currentObject} = route.params;
    const currentModel = models[currentObject.model]
    const rotateAnimation = {name: 'loopRotate', run: true, loop: true}
    return (
        <ViroARScene >
            <ViroSpotLight
                innerAngle={5}
                outerAngle={90}
                direction={[0,-1,-.2]}
                position={[0, 3, 1]}
                color="#ffffff"
                castsShadow={true}
            />
            <ViroNode  position={[-0, -.5, -.5]} dragType="FixedToWorld"  >
                <ViroSpotLight
                    innerAngle={5}
                    outerAngle={45}
                    direction={[0,-1,-.2]}
                    position={[0, 0, 0]}
                    color="#ffffff"
                    castsShadow={true}
                    influenceBitMask={2}
                    shadowMapSize={2048}
                    shadowNearZ={2}
                    shadowFarZ={5}
                    shadowOpacity={.7} />
                        <Viro3DObject
                            source={currentModel.source}
                            position={[0, -1, -2]}
                            scale={currentModel.scale}
                            type={currentModel.type}
                            rotation={[30,0,0]}
                            animation={rotateAnimation}
                            lightReceivingBitMask={3}
                            shadowCastingBitMask={2}
                            transformBehaviors={[]}
                            resources={currentModel.resources}/>

                <ViroQuad
                    rotation={[-90,0,0]}
                    width={.5} height={.5}
                    arShadowReceiver={true}
                    lightReceivingBitMask={2} />

            </ViroNode>

        </ViroARScene>
)
}

export default ({navigation, route})=>{
    return (<View style={{flex:1}}><ViroARSceneNavigator initialScene={{scene:ArSceneScreen.bind(this,{navigation, route})}} style={{flex:1}}/></View>)
}