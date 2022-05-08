/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import React, { useRef, useState,useEffect} from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated,config } from '@react-spring/three'

function Tulip({hovered, ...props}) {
  const group = useRef();
  const { colors } = useSpring({
    colors: hovered  ?'gray' : 'black',
    // config: {duration:50}
    });
  const { nodes, materials } = useGLTF("/tulip1JOINED.glb");
  return (
    <group ref={group} scale={[1.1,1.4,1.1]} {...props} dispose={null}>
      <animated.mesh
        material-emissiveIntensity={.3}
        material-emissive  = {colors}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.019"]}
        position={[-1.19, 5.46, -3.85]}
        rotation={[-Math.PI, 0.83, -Math.PI]}
        scale={[0.19, 0.08, 0.19]}
      />
      <animated.mesh
        material-emissiveIntensity={.3}
        material-emissive  = {colors}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.002"]}
        position={[-3.12, 0.16, -9.23]}
        rotation={[2.02, 1.57, 0]}
        scale={[-1.19, -0.35, -0.68]}
      />
      <animated.mesh
        material-emissiveIntensity={.3}
        material-emissive  = {colors}
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.Material}
        position={[-1.19, 5.95, -3.85]}
        rotation={[Math.PI / 2, 0, -2.56]}
        scale={[0.39, 0.39, 0.44]}
      />
    </group>
  );
}

useGLTF.preload("/tulip1JOINED.glb");


export default function Tulips({...props}) {
  const group = useRef();  
    const [hovered, setHover] = useState()

      useEffect(() => {
        document.body.style.cursor = hovered ? "pointer" : "auto"
      }, [hovered])

      const postions=[[-3,-.2,-5],[-4, -.5,-3],[-3,0,-4]]
      const scales=[1.2,1.4,1]
      const rotations=[[0,-Math.PI/2,0],[0,0,0],[0,-.4,0],[0,Math.PI/2,0]]
  return (

      <group ref={group} {...props}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        {postions.map((positon,idx) =>( <Tulip  key={idx}  hovered={hovered} position={positon}  scale={scales[idx]}  rotation={rotations[idx]} />))}
      </group>


  )
}
