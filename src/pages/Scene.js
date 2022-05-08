import "../App.css";
import { Canvas,useThree,useLoader,useFrame } from "@react-three/fiber";
import {  Bounds, useBounds, PerspectiveCamera, OrbitControls, Loader, Sky, Cloud, Environment,  ScrollControls, useScroll, Scroll} from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import useStore from "../appStore";
import { useLocation, Switch, Route } from "wouter"
import React, { Suspense,useRef, useState,useEffect, useMemo} from "react";
import Overlay from "../components/Overlay";
import Desert from "../components/Desert";
import Hat from "../components/Hat";

import VideoCard from "../components/VideoCard";
import MoveText from "../components/MoveText";
import Flowers from "../components/Flowers";



function Clouds() {
  return (
    <group>
      <Cloud depthTest={false} position={[-5, 15, -10]} speed={0.2} opacity={0.25} />
      <Cloud depthTest={false} position={[-10, 17, -12]} speed={0.2} opacity={0.24} />
      <Cloud depthTest={false} position={[10, 20, -7]} speed={0.4} opacity={0.24} />
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

    // const [active, setActive] = useState(false);
    function Set() {

      // This one makes the camera move in and out
      setGarden(true)
      return null
    }
    
    function Set1() {
    
      setGarden(false)
      return null
    }
    


  const setVisible = useStore((state) => state.setVisible);
  const first = useRef();

  const isVisible =  useStore((state) => state.isVisible);
  const { pages } = {pages: isVisible ? 1 : 3}

useEffect(()=>{
  console.log(isVisible)
},[isVisible])
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
           minAzimuthAngle={Math.PI/2.2}
           maxAzimuthAngle={Math.PI/1.8}
           minPolarAngle={Math.PI/2.3}
           maxPolarAngle={Math.PI/2.1}
           enableZoom={false}
           enablePan={true}
      />  

<directionalLight
      castShadow
      position={[10, 20, 15]}
      shadow-camera-right={8}
      shadow-camera-top={8}
      shadow-camera-left={-8}
      shadow-camera-bottom={-8}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      intensity={.5}
      shadow-bias={-0.0001}
    />

<Environment preset="sunset"/>

    <Overlay navigate={navigate}/>
    {/* <ScrollControls enabled={!isVisible} damping={6} pages={pages} > */}
    <Sky sunPosition={[100, 20, 100]} />

     
      <Switch location={location}>
        <Route path="/">

 {/* camera={{ position: [0, -10, 30], fov: 50 }} */}
        <ScrollControls enabled={true} damping={6} pages={5} >
        <Set1></Set1>

        <Dolly/>
 
        <PerspectiveCamera position={[0, -3, 30]} fov={50}  makeDefault={!isGarden} />

          <Scroll html style={{ width: '100%' }}  >
          <VideoCard />     
          </Scroll>       
          
        
        <Scroll>

        <Clouds1/>

        </Scroll>

<MoveText  navigate={navigate}/> 

         
          <Hat/>
  
      </ScrollControls>
      
        </Route>
          <Route path="/about">
                <Set></Set>

                <Clouds/>

          <Desert />
            <Bounds  fit={isGarden} clip damping={1.4} margin={1.5}>
              <SelectToZoom navigate={navigate} >

              <Flowers  navigate={navigate}/>
            </SelectToZoom>
            </Bounds>
        </Route>
        <Route path="/garden/:id/:id">
          
        <Set></Set>

        <Desert />
        <Clouds/>

          <Bounds  fit={isGarden} clip damping={1.4} margin={1.5}>
            <SelectToZoom navigate={navigate} >
              
            <Flowers  navigate={navigate}/>
          </SelectToZoom>
          </Bounds>   
        </Route>
        <Route path="/garden">
        <Set></Set>
        <Hat/>
        <Desert />
        <Clouds/>

          <Bounds  fit={isGarden} clip damping={1.4} margin={1.5}>
            <SelectToZoom navigate={navigate} >
              
            <Flowers  navigate={navigate}/>
          </SelectToZoom>
          </Bounds>        
          </Route>
          
        <Route path="/garden/:id">

        <Set></Set>
        <Hat/>
        <Desert />
        <Clouds/>

          <Bounds  fit={isGarden} clip damping={1.4} margin={1.5}>
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
  const isVisible =true
  // const isVisible =  useStore((state) => state.isVisible);
  const listboxClicked = (e) => {
    if(isVisible){
     e.button === 0 && api.refresh().fit()
    }
  }

  const listboxClicked1 = (e) => {
    if(isVisible){
      e.stopPropagation()
       e.delta <= 2 && api.refresh(e.object).fit()
       console.log('no')
      }
       
  }

  // useEffect(()=>{
  //   api.refresh().fit()
  // },[isVisible])
  return (
    <group 
    onClick={(e) =>listboxClicked1(e) } 

    onPointerMissed={(e) =>listboxClicked(e)}>
    {children}
    </group>
  )
}


function Dolly() {
  const api = useBounds()


  useFrame((state) => {

    state.camera.lookAt(0,-.8,0)
    state.camera.updateProjectionMatrix()

  })
  return null
}


