import React, { useRef} from "react";
import { useGLTF} from "@react-three/drei";
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

        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.001"]}
        position={[-15, 1.5, 28]}
        rotation={[0.01, .2,-.05]}
        scale={[2.5,5.4,5.6]}
      />
    
    // </group>
  )
}

useGLTF.preload("/desertsmall.glb");