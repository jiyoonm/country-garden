
import React, { useRef } from "react";
import { useScroll,Html } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export default function MoveText({navigate, props}) {
  const rsqw = (t, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)
  const scroll = useScroll()
  const first = useRef();

  const left = useRef();
  const right = useRef();
  const fourth = useRef();
  const button = useRef();
  

  const scale=5
  const offset= 10
  // onScroll={(e) => {
  //   scroll.current = e.target.scrollTop / (e.target.scrollHeight - window.innerHeight)
  //   // caption.current.innerText = scroll.current.toFixed(2)
  // }}
  useFrame(() => {
    const r1 = scroll.visible(1 / 5, 1.3/ 5)
    const r2 = scroll.visible(2.5 / 5, 1.3/ 5)
    const r3 = scroll.visible(4/ 5, 1.3/ 5)

    first.current.classList.toggle('showa', r1)
    left.current.classList.toggle('showa', r2)
    // right.current.classList.toggle('showa', r3)
    fourth.current.classList.toggle('showa', r3)


    // console.log(r3)
    // left.current.innerText = r3
  })

  return (
    <Html transform={false} style={{ transform: 'none' }} >
    {/* <div> */}
    <h3 className=" caption" ref={first}>

    Country music is an essential part of southern culture. Step one foot in Southern America and you’re bound to hear this song playing in any football game, barbeque, or restaurant you enter. However, despite its widespread popularity within the diverse South, the country music scene remains homogeneously white. 
        

  </h3>
  <h3 className=" caption" ref={left}>

  In reality, country music's origins were dependent on the transcendence of cultural and national border lines. Let's explore John Denver’s song as an example, a song often regarded as fundamentally country, painting an idyllic view of the South. It's a timeless classic, a powerful cultural symbol, and has even taken on international reign, taking on new adaptations and meanings in countries like Japan and Jamaica. 
  </h3>

  <div  className="caption fourth"  ref={fourth}>
  <h3 className="buttons " >

When dissecting a country classic like John Denver’s Country Roads, you can begin to find the diverse roots behind the iconic sounds of the South. 
</h3>
<button className="buttons enterA" onClick={() =>  navigate("/garden")}>
        <span className=" a white-a underline " >
     TAP TO ENTER
       </span>
      </button>
   
  </div>
  
   {/* <span className="caption">
   0.00
 </span>
  <span className="caption" >
  0.00
</span> */}
{/* </div> */}
</Html>
  );
}
