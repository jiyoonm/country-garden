
import "../App.css";
import React, {  useEffect } from "react"

import { useNavigate, useParams} from "react-router-dom";

import flowerIndex from '../data/flowerIndex.json'
import useStore from "../appStore";

export default function FullPage() {  
  const tracks =  useStore((state) => state.tracks);
  const setPlaylist = useStore((state) => state.setPlaylist);

  const setTrackDetail = useStore((state) => state.setTrackDetail);
  // const {playlist, setPlaylist } = useContext(UserContext);
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
  return(

  <div className="sections">
    <div className="exit">
      <div></div>
  <button onClick={() => navigate("/garden")}>
  <span  className="close-btn"></span>
      </button>
</div>
    <div className="words">

    <div className="titles">
      <div >
    <p>THE SOUND OF HISTORY REVEALING ITSELF</p>
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

