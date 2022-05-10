import React, { useRef, useState,useEffect} from "react";
import { useGLTF } from "@react-three/drei";
import { useSpring, animated } from '@react-spring/three'

function Rose({hovered, ...props}) {
  const group = useRef();
  const { colors } = useSpring({
    colors: hovered  ?'grey' : 'black',
    // config: {duration:50}
    });
  const { nodes, materials } = useGLTF("/SMMALLROSE.JOINblend.glb");
  return (
    <group ref={group} name={'rose'} {...props} dispose={null}>
        <animated.mesh
        material-emissiveIntensity={.3}
        material-emissive  = {colors}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.013"]}
        position={[-0.15, 6.88, 1.43]}
        rotation={[0, -0.62, 0]}
        scale={[0.18, 0.07, 0.18]}
      />
    <animated.mesh
        material-emissiveIntensity={.3}
        material-emissive  = {colors}
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials.Material}
        position={[-0.85, 7.01, 1.31]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.65, 0.74, 0.85]}
      />
    </group>
  );
}

useGLTF.preload("/SMMALLROSE.JOINblend.glb");


export default  function Roses({...props}) {
  const group = useRef();  
    const [hovered, setHover] = useState()

      useEffect(() => {
        document.body.style.cursor = hovered ? "pointer" : "auto"
      }, [hovered])

      const postions=[[-.6, -1, 4],[-2.6,-.5, 4.8],[-2.6, -1,3],[-1.4, -1, 4]]
      const scales=[1.1,1,1.4,.9]
      const rotations=[[0,Math.PI,0],[0,0,0],[0,-.4,0],[0,Math.PI/2,0]]

  return (

      <group ref={group}  {...props}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
      >
        {postions.map((positon,idx) =>( <Rose  key={idx}  hovered={hovered} position={positon} scale={scales[idx]}  rotation={rotations[idx]}/>))}
      </group>


  )
}
