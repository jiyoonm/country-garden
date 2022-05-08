
import React, { useRef, useEffect } from "react";
import { useGLTF, useIntersect} from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import useStore from "./../appStore";

export default function Desert ( props) {
  const { width, height } = useThree((state) => state.viewport)
  // const setVisible = useStore((state) => state.setVisible);
  // const ref = useIntersect((visible) => setVisible(visible))
  const isVisible =  useStore((state) => state.isVisible);

  const group = useRef();
  const { nodes, materials } = useGLTF("/desertsmall.glb");
  return (
    // <group ref={group} {...props} dispose={null}>
      <mesh
      // visible={isVisible}
        // ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.001"]}
        position={[-17, 1.6, 20]}
        rotation={[0.01, .2,-.03]}
        scale={[2.5,6,5.6]}
      />
    
    // </group>
  )
}

useGLTF.preload("/desertsmall.glb");
