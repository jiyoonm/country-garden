import React, {  useEffect} from "react"
import { BrowserRouter as Router, useNavigate, useParams,useLocation} from "react-router-dom";

import '../App.css';
import useStore from "../appStore";
import Detail from '../components/Detail';
import flowerIndex from '../data/flowerIndex.json'

function SongDetail(){
    const { id, songid } = useParams();
    const location = useLocation();
    const setZoom = useStore((state) => state.setZoom);

    const setPlaylist = useStore((state) => state.setPlaylist);
    const setTrackDetail = useStore((state) => state.setTrackDetail);
    const navigate = useNavigate();
    const trackDetail = useStore((state) => state.trackDetail);
    const audioDetail = useStore((state) => state.audioDetail);
    const tracks =  useStore((state) => state.tracks);
    const audios =  useStore((state) => state.audios);
    const flowerName =  useStore((state) => state.flowerName);
    const curentIndex = Object.keys(flowerIndex).indexOf(id);
    // console.log("I"+(currentTracks.length)+Object.keys(flowerIndex)[0])
    useEffect(() => {
        setPlaylist(flowerIndex[id].playlist, id)
    }, [id]); 

    const currentTracks = [...tracks];

    if (currentTracks.length!==0){
        const trackInfo  = currentTracks[songid].track;
        setTrackDetail(trackInfo, songid)
    }

    const nextClicked = () => {
        const currentVal= parseInt(songid)
        if (currentVal>=currentTracks.length-1){
            if(curentIndex>=2){
            navigate(`/garden/${Object.keys(flowerIndex)[0]}`)
            }
            else{
                navigate(`/garden/${Object.keys(flowerIndex)[curentIndex+1]}`)

            }}
       else{
            navigate(`/garden/${flowerName}/${currentVal+1}`)
        }
      }
    const prevClicked = () => {
        const currentVal= parseInt(songid)
        if (currentVal<=0){
            navigate(`/garden/${flowerName}`)
        }
        else{
            navigate(`/garden/${flowerName}/${currentVal-1}`)

        }

    }
    const exitClicked = (e) => {
        navigate("/garden")
        setZoom(e);
      }
    return(
    <div className='sectionsSongs'  style={{ background:`${flowerIndex[id].color}`}}>
       <button className='nav-icon1 open ' onClick={(e) =>exitClicked(e)}>
        <span ></span>
        <span ></span>
      </button>
        <div className="detail" >
      <div className="titles">
        <div >
          <p>REDEFINING COUNTRY ROADS</p>
        </div>
        <div className="subtitles">
          <p>{flowerIndex[id].subtitle}</p>
        </div>
      </div>
            {trackDetail && <Detail {...trackDetail} location={location.pathname} tracks={audios} trackIndex={audioDetail} about={flowerIndex[id].songsdetail[audioDetail]} titles={flowerIndex[id].songstitle[audioDetail]} />}
        <div className="progressNav">
        <button className="prev" onClick={prevClicked}>
            {/* <div className="prev"/> */}
          previous
                        </button>
            <p>{parseInt(songid)+1}/{currentTracks.length}</p>
            <button className="prev" onClick={nextClicked}>
          
next
            </button>
            </div>

        </div>
    </div>
    )
}
export default SongDetail