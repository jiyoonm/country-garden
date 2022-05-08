
import React, { useRef, useState } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import useStore from "../appStore";

export default function Hat(props) {
    const [active, setActive] = useState(true);
    const isGarden =  useStore((state) => state.isGarden);
    const group = useRef();
    const { nodes, materials } = useGLTF("/hat_joine11d.glb");
    const scroll = useScroll()
    const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)

//   useFrame(() => {
//               if (!isGarden){

//       group.current.rotation.z = Math.PI  * rsqw(scroll.offset)}
//     })

    const scale=4.5

    const offset= -8.5
    // useFrame(() => {
    //     if (!isGarden){
    //         const r1 = scroll.visible(0 / 5, 1/ 5)
    //         if (!r1){
    //             setActive(true)

    //        }
    //             else{
    //             setActive(false)
    //             }
    //     }
    // })
    useFrame(()=>{
                if (!isGarden){

        group.current.rotation.x = Math.PI*2  * rsqw(scroll.offset)+.1
        group.current.rotation.y = -Math.PI*2  * rsqw(scroll.offset)
                }
    })

    // if(isGarden){
    //     setActive(true)
    // }
    return (
        <group ref={group} rotation={[0,0,0]} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere005.geometry}
                material={materials["Material.006"]}
                position={[offset, -1.64, 3]}
                rotation={[0,0,0]}

                scale={[1*scale, 0.92*scale, 0.88*scale]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere.geometry}
                material={materials["Material.001"]}
                position={[offset, -1.5, 3]}
                rotation={[0,0,0]}

                scale={[1*scale, 1*scale, 0.88*scale]}
                />
        </group>
    );
}

useGLTF.preload("/hat_joine11d.glb");
