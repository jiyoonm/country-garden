
import React, { useRef, useEffect } from "react";
import { useGLTF, useScroll,useIntersect } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import useStore from "../appStore";

export default function Hat(props) {
    const isGarden =  useStore((state) => state.isGarden);
    const group = useRef();
    // const ref = useRef();
    const setVisible = useStore((state) => state.setVisible);

    const { nodes, materials } = useGLTF("/hat_joine11d.glb");
    const scroll = useScroll()
    const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
    
    useFrame(()=>{
                if (!isGarden){
        const r1 = scroll.visible(0 / 5, 1/ 5)
        if (!r1){
            group.current.visible=true
        }
        else{
            group.current.visible=false

        }
        group.current.rotation.x = Math.PI*2  * rsqw(scroll.offset)+.1
        group.current.rotation.y = -Math.PI*2  * rsqw(scroll.offset)
                }
    })

useEffect(() => {
    setVisible(false)

}, [])
useEffect(() => {
    if (isGarden){
        setVisible(false)
    }
   }, [isGarden])
const ref = useIntersect((visible) => setVisible(visible))


    return (
        <group ref={group} rotation={[0,0,0]} {...props} dispose={null}>
            <mesh
            ref={ref}
                castShadow
                receiveShadow
                geometry={nodes.Sphere005.geometry}
                material={materials["Material.006"]}
                position={[0, -1.53, 3]}
                rotation={[0,0,0]}

                scale={[1, 0.92, 0.88]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere.geometry}
                material={materials["Material.001"]}
                position={[0, -1.5, 3]}
                rotation={[0,0,0]}

                scale={[1, 1, 0.88]}
                />
        </group>
    );
}

useGLTF.preload("/hat_joine11d.glb");
