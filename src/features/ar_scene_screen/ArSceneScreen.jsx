import React, {useCallback, useState} from 'react';
import {
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroARSceneNavigator,
    ViroImage,
    ViroMaterials,
    ViroBox,
    ViroAnimations,
    ViroQuad,
    ViroSpotLight,
    ViroNode,
    Viro3DObject, ViroAmbientLight, ViroARPlaneSelector
} from '@viro-community/react-viro';
import {View} from "react-native";

ViroAnimations.registerAnimations({
    loopRotate: {
        properties: {
            rotateY: '+=90'
        },
        duration: 600
    },
});

ViroAnimations.registerAnimations({
    zoom: {
        properties: {
            positionZ: '.2'
        },
        duration: 600
    },
});





const ArSceneScreen = ()=>{

    const [rotation, setRotation] = useState([-4, -4,-4])
    const rotateAnimation = {name: 'loopRotate', run: true, loop: true}
    const zoomAnimation = {name: 'zoom', run: true}
    const [currentAnimation, setCurrentAnimation] = useState(rotateAnimation)
    const rotateObject =useCallback((rotateState, rotationFactor, source) => {
            setRotation([rotation[0], rotation[1] + rotationFactor, rotation[2]])
            return;
    },[rotation])
    const onObjectClick = ()=>{
        setCurrentAnimation(zoomAnimation)
    }
    return (

        <ViroARScene >
            <ViroSpotLight
                innerAngle={5}
                outerAngle={90}
                direction={[0,-1,-.2]}
                position={[0, 3, 1]}
                color="#aaaaaa"
                castsShadow={true}
            />

            {/* Node that contains a light, an object and a surface to catch its shadow
            notice that the dragType is "FixedToWorld" so the object can be dragged
            along real world surfaces and points. */}
            <ViroNode  position={[-0, -.5, -.5]} dragType="FixedToWorld"  >

                {/* Spotlight to cast light on the object and a shadow on the surface, see
              the Viro documentation for more info on lights & shadows */}
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
                            source={require('../../assets/3dObjects/emoji_smile/emoji_smile.vrx')}
                            position={[0, .2, .1]}
                            scale={[.2, .2, .2]}
                            type="VRX"
                            onClick={onObjectClick}
                            onRotate={rotateObject}
                            animation={currentAnimation}
                            lightReceivingBitMask={3}
                            shadowCastingBitMask={2}
                            transformBehaviors={[]}
                            resources={[require('../../assets/3dObjects/emoji_smile/emoji_smile_diffuse.png'),
                                require('../../assets/3dObjects/emoji_smile/emoji_smile_specular.png'),
                                require('../../assets/3dObjects/emoji_smile/emoji_smile_normal.png')]}/>



                <ViroQuad
                    rotation={[-90,0,0]}
                    width={.5} height={.5}
                    arShadowReceiver={true}
                    lightReceivingBitMask={2} />

            </ViroNode>

        </ViroARScene>
    )
}

export default ()=>{
    return (<View style={{flex:1}}><ViroARSceneNavigator  initialScene={{scene:ArSceneScreen}} style={{flex:1}}/></View>)
}