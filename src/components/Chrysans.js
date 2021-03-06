/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useState,useEffect} from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from '@react-spring/three'

function Chrysan({hovered, ...props}) {
  const { colors } = useSpring({
    colors: hovered  ?'grey' : 'black',
    // config: {duration:50}
    });
  const group = useRef();
  const { nodes, materials } = useGLTF("/flower3.glb");
  useEffect(() => {
console.log(hovered)  }, [hovered])
  return (
    <group ref={group}  {...props} dispose={null}>
      <animated.mesh
        material-emissiveIntensity={.3}
        material-emissive  = {colors}
        castShadow
        receiveShadow
        geometry={nodes.LEAF.geometry}
        material={materials.LEAF}
        position={[-1.31, -1.22, -2.13]}
        rotation={[0, 0.36, 0]}
        scale={[0.23, 0.42, 0.2]}
      />
      <animated.mesh
        material-emissiveIntensity={.3}
        material-emissive  = {colors}
        castShadow
        receiveShadow
        geometry={nodes.flower.geometry}
        material={materials.FLOWER}
        position={[-1.23, 1.28, -2.01]}
        rotation={[-Math.PI, 0.98, -Math.PI]}
        scale={[0.18, 0.27, 0.18]}
      />
    </group>
  );
}

useGLTF.preload("/flower3.glb");

export default function Chrysans({...props}) {
  const group = useRef();  
    const [hovered, setHover] = useState()

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto"
  }, [hovered])

  const postions=[[4,-1.4,-3],[6, -2.4,0],[1.5,-1.,-1.6]]
  const scales=[1.3,1.6,1.2]
  const rotations=[[0,Math.PI/2,0],[0,0,0],[0,-Math.PI/4,0]]
  return (

      // <Fireflies bool={hovered}/>
      <group ref={group}{...props}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
       
        >
        {postions.map((positon,idx) =>( <Chrysan  key={idx}  hovered={hovered} position={positon} scale={scales[idx]}  rotation={rotations[idx]}/>))}
      </group>


  )
}
