import React, { Suspense } from "react";
import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Lights from './Lights';
import * as THREE from 'three';

// import Loader from './Loader';

const ModelView = ({index, groupRef, gsapType, controlRef, setRotation, size, item}) => {
    return (
        <View
            index={index}
            id={gsapType}
            className={`w-full h-full ${index===2} ? 'right-[-100%] : ''`}
        >
            <ambientLight intensity={0.3}/>
            <PerspectiveCamera makeDefault position={[0, 0, 4]} />
            <Lights />
            <OrbitControls
                makeDefault
                ref={controlRef}
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.4}
                target={new THREE.Vector3(0, 0, 0)}
            />
            <group ref={groupRef} name={`${index===1} ? 'small' : 'large'`} position={[0, 0, 0]}>
                <Suspense fallback={<Html><div>Loading</div></Html>}>
                    {/* <IPhone/> */}
                </Suspense>
            </group>

        </View>
    )
}
export default ModelView;