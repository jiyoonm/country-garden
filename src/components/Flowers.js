import Roses from "./Roses";
import Tulips from "./Tulips";
import Chrysans from "./Chrysans";
import React, { useRef, useState } from "react";
// import { useGLTF, useScroll } from "@react-three/drei";
// import { useFrame } from '@react-three/fiber'


export default function Flowers({navigate}) {
  const group = useRef();
  const clicked =  (name) => {
    // console.log(val)
    // setPlaylist(val,name)
    navigate(`garden/${name}`)
  }  
  return (
    <group ref={group} dispose={null}>

        <Roses onClick={() => navigate("garden/rose")} />
        <Tulips onClick={() => navigate("garden/tulip")} />
        <Chrysans onClick={() => navigate("garden/chrysanthemum")}

/>

    </group>
  );
}

