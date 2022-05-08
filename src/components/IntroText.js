
import React, { useRef } from "react";
import { useGLTF, useScroll,Html } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export default function IntroText() {
  const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
  const scroll = useScroll()

  const group = useRef();
  const scale=5
  const offset= 10
//   useFrame(() => (group.current.rotation.x = Math.PI*2  * rsqw(scroll.offset)))

  return (
      <Html>
    <div className="intro">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    </div>
    </Html>
  );
}

