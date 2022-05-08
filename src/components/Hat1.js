
import React, { useRef, useState } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export default function Hat1( props) {
  const [active, setActive] = useState(false);

  const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
  const scroll = useScroll()
  const visiblity=true
  const group = useRef();
  const ref = useRef();

  const scale=1

  const offset= -8
  // useFrame(() => (group.current.rotation.y = Math.PI  * rsqw(scroll.offset)))

  


  const { nodes, materials } = useGLTF("/hatfina1l.glb");
  return (
    <group ref={group} {...props} rotation={[-.26,-2,0]} dispose={null}>
      <mesh
      ref={ref}
        visible={true}
        castShadow
        receiveShadow
        geometry={nodes.Sphere005.geometry}
        material={materials["Material.006"]}
        position={[-8, 2.55, -6]}
        rotation={[0,0,0]}
        scale={[1.02*scale, 0.94*scale, 0.9*scale]}
      />
      <mesh
        visible={true}
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.001"]}
        position={[-8, 2.6, -6]}
        rotation={[0,0,0]}

        scale={[1*scale, 1*scale, 0.88*scale]}
      />
    </group>
  );
}

useGLTF.preload("/hatfina1l.glb");
