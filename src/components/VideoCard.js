
import React, { useRef,useState } from "react";
import { useFrame } from '@react-three/fiber'
import {  useScroll} from "@react-three/drei";



export default function VideoCard( props) {
const overlay= useRef()
const video= useRef()
const contain= useRef()
const title= useRef()
const scroll=useScroll()
const [muted, setMuted] = useState(true);

useFrame(() => {
    const   r1 = scroll.visible(0 / 5, .9/ 5)
    const  r2 = scroll.visible(0 / 5, .5/ 5)

    overlay.current.classList.toggle('shows', r1)

    video.current.classList.toggle('showa', r1)
    
    contain.current.classList.toggle('showa', r1)
    title.current.classList.toggle('showa', r2)

  })
  const handleToggleMute = () => setMuted(current => !current);




   return (
    <>
        <div className='nav-sections1'ref={title} >
            {/* <div className="sections"> */}
     
{/* 
          <div>   
          </div> */}
          <div className="main-titles">
          <h1 className="main-title">Redefining 
            <br/>
          Country Roads</h1>

              <h3 className="main-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incina aliqua. </h3>

            </div>
            <button onClick={handleToggleMute} className="control">{muted?"Unmute Video":"Mute Video"}</button>
    </div>


    <div class="video-container" ref={contain}>
            <div class="overlay" ref={ overlay
        }>             
        </div>
                      <video ref={video} id="vid" src="websitetest.mp4"  autoPlay  loop muted ={muted} ></video>

  </div>

  </>

  );
}

