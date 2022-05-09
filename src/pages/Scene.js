import "../App.css";
import { Canvas,useFrame } from "@react-three/fiber";
import {  Bounds, useBounds, PerspectiveCamera, OrbitControls,  Sky, Cloud, Environment,  ScrollControls, useScroll, Scroll} from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import useStore from "../appStore";
import { useLocation, Switch, Route } from "wouter"
import React, { Suspense} from "react";
import Overlay from "../components/Overlay";
import Desert from "../components/Desert";
import Hat from "../components/Hat";

import VideoCard from "../components/VideoCard";
import MoveText from "../components/MoveText";
import Flowers from "../components/Flowers";



function Clouds() {
  return (
    <group>
      <Cloud depthTest={false} position={[-20, 19, -20]} speed={0.3} opacity={0.25} />
      <Cloud depthTest={false} position={[-16, 20, -9]} speed={0.3} opacity={0.24} />
      <Cloud depthTest={false} position={[-16, 16,4]} speed={0.2} opacity={0.24} />
    </group>
  )
}
function Clouds1() {
  return (
    <group>
      <Cloud depthTest={false} position={[10, -30, -15]} speed={0.2} opacity={0.25} />
      <Cloud depthTest={false} position={[10, -40, -15]} speed={0.2} opacity={0.25} />
      <Cloud depthTest={false} position={[8, -55, 15]} speed={0.4} opacity={0.23} />
      <Cloud depthTest={false} position={[0, -60, 0]} speed={0.2} opacity={0.23} />
      <Cloud depthTest={false} position={[-7, -68, 0]} speed={0.4} opacity={0.23} />
      <Cloud depthTest={false} position={[7, -96, 15]} speed={0.5} opacity={0.23} />
      <Cloud depthTest={false} position={[9, -100, -15]} speed={0.9} opacity={0.23} />
    </group>
  )
}

export default function Scene(props) {
  const isGarden =  useStore((state) => state.isGarden);
  const setGarden =  useStore((state) => state.setGarden);
   const setVisible =  useStore((state) => state.setVisible);

    function Set() {
      setGarden(true)
      return null
    }
    
    function Set1() {
      setGarden(false)
      return null
    }
    function Set2() {
      // setVisible(true)
      return null
    }
    
    function Set3() {
      // setVisible(false)
      return null
    }
    


const [location, setLocation] = useLocation();
const scroll = useScroll();

  const navigate = useNavigate();
    return (
      <div className="wrapper">

<Canvas colorManagement={true} shadows  camera={{ position: [0, -3, 30], fov: 50 }}  dpr={[1, 2]}> 


  <Suspense fallback={null}>
      <PerspectiveCamera position={[0, -3, 30]} fov={50}  makeDefault={isGarden} />

      <OrbitControls
                enabled={isGarden}
                makeDefault={isGarden}
                minAzimuthAngle={Math.PI/2.5}
                maxAzimuthAngle={Math.PI/1.8}
                minPolarAngle={Math.PI/2.3}
                maxPolarAngle={Math.PI/2.1}
                enableZoom={false}
                enablePan={true}
            />  

      <directionalLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={14}
            shadow-camera-top={14}
            shadow-camera-left={-14}
            shadow-camera-bottom={-14}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={.3}
            shadow-bias={-0.0001}
          />

      <Environment preset="sunset"/>
      <Overlay navigate={navigate}/>
      <Sky sunPosition={[100, 20, 100]} />

          
      <Switch location={location}>
        <Route path="/">
          <ScrollControls enabled={true} damping={6} pages={5} >
              <Set1/>
              <Dolly/>
              <PerspectiveCamera position={[0, -3, 30]} fov={50}  makeDefault={!isGarden} />
              <Scroll html style={{ width: '100%' }} pointerEvents='all' >
                <Set2/>
                <VideoCard />     
              </Scroll>       
              <Scroll>
                                <Set3/>
                <Clouds1/>
              </Scroll>
              <MoveText  navigate={navigate}/> 
              <Hat scale={4.5}  position={[-7.5,5.3,-6]}/>
          </ScrollControls>
        </Route>
        <Route path="/about">
          <Set/>
          <Hat scale={1.4} rotation={[Math.PI/10,Math.PI/10,-Math.PI/13]} position={[5, 3.2, -13]} />
          <Desert />
          <Clouds/>
          <Bounds  fit={isGarden} clip damping={1.4} margin={1.3}>
            <SelectToZoom navigate={navigate} >
              <Flowers  navigate={navigate}/>
            </SelectToZoom>
          </Bounds>     
        </Route>
        <Route path="/garden/:id/:id">
          <Set/>
            <Hat scale={1.4} rotation={[Math.PI/10,Math.PI/10,-Math.PI/13]} position={[5, 3.2, -13]} />
            <Desert />
            <Clouds/>
            <Bounds  fit={isGarden} clip damping={1.4} margin={1.3}>
              <SelectToZoom navigate={navigate} >
                <Flowers  navigate={navigate}/>
              </SelectToZoom>
            </Bounds>   
          </Route>
          <Route path="/garden">
            <Set/>
            <Hat scale={1.4} rotation={[Math.PI/10,Math.PI/10,-Math.PI/13]} position={[5, 3.2, -13]} />
            <Desert />
            <Clouds/>
            <Bounds  fit={isGarden} clip damping={1.4} margin={1.3}>
              <SelectToZoom navigate={navigate} >
                <Flowers  navigate={navigate}/>
              </SelectToZoom>
            </Bounds>       
          </Route>
          <Route path="/garden/:id">
            <Set/>
            <Hat scale={1.4} rotation={[Math.PI/10,Math.PI/10,-Math.PI/13]} position={[5, 3.2, -13]} />
            <Desert />
            <Clouds/>
            <Bounds  fit={isGarden} clip damping={1.4} margin={1.3}>
              <SelectToZoom navigate={navigate} >
                <Flowers  navigate={navigate}/>
              </SelectToZoom>
            </Bounds>      
          </Route>
      </Switch>
  </Suspense>
</Canvas>


</div>
)}
function SelectToZoom({ children, navigate }) {
  const api = useBounds()
 
  const missClick = (e) => {
     e.button === 0 && api.refresh().fit()
    
  }

  const objectClicked = (e) => {
      e.stopPropagation()
      console.log(e)
       e.delta <= 2 && api.refresh(e.object.parent).fit()
    
       
  }
 
  return (
    <group 
    onClick={(e) =>objectClicked(e) } 
    onPointerMissed={(e) =>missClick(e)}>

    {children}
    </group>
  )
}


function Dolly() {
  useFrame((state) => {
    state.camera.lookAt(0,-.8,0)
    state.camera.updateProjectionMatrix()
  })
  return null
}


