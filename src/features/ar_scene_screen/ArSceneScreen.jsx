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
            rotateY: '+=90'
        },
        duration: 600
    },
});

const ArSceneScreen = ()=>{
    const rotateAnimation = {name: 'loopRotate', run: true, loop: true}
    return (
        // <ViroARScene >
        //     <ViroSpotLight
        //         innerAngle={5}
        //         outerAngle={90}
        //         direction={[0,-1,-.2]}
        //         position={[0, 3, 1]}
        //         color="#aaaaaa"
        //         castsShadow={true}
        //     />
        //     <ViroNode  position={[-0, -.5, -.5]} dragType="FixedToWorld"  >
        //         <ViroSpotLight
        //             innerAngle={5}
        //             outerAngle={45}
        //             direction={[0,-1,-.2]}
        //             position={[0, 3, 0]}
        //             color="#ffffff"
        //             castsShadow={true}
        //             influenceBitMask={2}
        //             shadowMapSize={2048}
        //             shadowNearZ={2}
        //             shadowFarZ={5}
        //             shadowOpacity={.7} />
        //                 <Viro3DObject
        //                     source={require('../../assets/3dObjects/muslim/muslim.obj')}
        //                     position={[0, .2, .1]}
        //                     scale={[.2, .2, .2]}
        //                     type="OBJ"
        //                     animation={rotateAnimation}
        //                     lightReceivingBitMask={3}
        //                     shadowCastingBitMask={2}
        //                     transformBehaviors={[]}
        //                     resources={[]}/>
        //
        //         <ViroQuad
        //             rotation={[-90,0,0]}
        //             width={.5} height={.5}
        //             arShadowReceiver={true}
        //             lightReceivingBitMask={2} />
        //
        //     </ViroNode>
        //
        // </ViroARScene>
        <ViroARScene>
            <ViroAmbientLight color={"#aaaaaa"} influenceBitMask={1} />

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
            <ViroNode position={[-.5, -.5, -.5]} dragType="FixedToWorld" onDrag={()=>{}} >

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
                    source={require('../../assets/3dObjects/muslim/muslim.obj')}
                    position={[0, .2, 0]}
                    scale={[.2, .2, .2]}
                    type="VRX"
                    lightReceivingBitMask={3}
                    shadowCastingBitMask={2}
                    transformBehaviors={['billboardY']}
                    resources={[require('../../assets/3dObjects/muslim/muslim.mtl'),]}/>

                <ViroQuad
                    rotation={[-90,0,0]}
                    width={.5} height={.5}
                    arShadowReceiver={true}
                    lightReceivingBitMask={2} />

            </ViroNode>

            {/* Node that contains a light, an object and a surface to catch its shadow
          notice that the dragType is "FixedToWorld" so the object can be dragged
          along real world surfaces and points. */}
            <ViroNode position={[.5,-.5,-.5]} dragType="FixedToWorld" onDrag={()=>{}} >

                {/* Spotlight to cast light on the object and a shadow on the surface, see
              the Viro documentation for more info on lights & shadows */}
                <ViroSpotLight
                    innerAngle={5}
                    outerAngle={45}
                    direction={[0,-1,-.2]}
                    position={[0, 3, 0]}
                    color="#ffffff"
                    castsShadow={true}
                    influenceBitMask={4}
                    shadowMapSize={2048}
                    shadowNearZ={2}
                    shadowFarZ={5}
                    shadowOpacity={.7} />

                <ViroQuad
                    rotation={[-90,0,0]}
                    width={.5} height={.5}
                    arShadowReceiver={true}
                    lightReceivingBitMask={4} />

            </ViroNode>

        </ViroARScene>
    )
}

export default ()=>{
    return (<View style={{flex:1}}><ViroARSceneNavigator  initialScene={{scene:ArSceneScreen}} style={{flex:1}}/></View>)
}