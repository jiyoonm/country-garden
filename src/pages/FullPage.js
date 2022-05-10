
import "../App.css";
import React, {  useEffect } from "react"

import { useNavigate, useParams} from "react-router-dom";

import flowerIndex from '../data/flowerIndex.json'
import useStore from "../appStore";

export default function FullPage() {  
  const tracks =  useStore((state) => state.tracks);
  const setPlaylist = useStore((state) => state.setPlaylist);
  const setZoom = useStore((state) => state.setZoom);

  const setTrackDetail = useStore((state) => state.setTrackDetail);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    setPlaylist(flowerIndex[id].playlist, id)
    
    }, [id]); 
 
  const listboxClicked = () => {
    const currentTracks = [...tracks];
    const trackInfo = currentTracks[0].track;
    navigate(`/garden/${id}/${0}`)
    setTrackDetail(trackInfo, 0);
  }
  const exitClicked = (e) => {
    navigate("/garden")
    setZoom(e);
  }
  return(

  <div className={`sections`} style={{ background:`${flowerIndex[id].color}`}}>
    <div className="exit">
      <div></div>
      <button className='nav-icon1 open ' onClick={(e) => exitClicked(e)}>
        <span ></span>
        <span ></span>
      </button>
  </div>
    <div className="words">

    <div className="titles">
      <div >
    <p>REDEFINING COUNTRY ROADS</p>
    </div>
    <div className="subtitles">

    <p>{flowerIndex[id].subtitle}</p>
    </div>

      </div>
   <div className="column">
   <h1>{flowerIndex[id].title}</h1>

      <p>{flowerIndex[id].description}</p>
    </div>
    <div className="enter">
      <button className="enterB" onClick={listboxClicked}>
        <span className="a underline">
       EXPLORE THE SOUNDS 
       </span>
      </button>
      </div>
    </div>
  </div>

)
}

