import React, {  useEffect} from "react"
import { BrowserRouter as Router, useNavigate, useParams,useLocation} from "react-router-dom";

import '../App.css';
import useStore from "../appStore";
import Detail from '../components/Detail';
import flowerIndex from '../data/flowerIndex.json'

function SongDetail(){
    const { id, songid } = useParams();
    const location = useLocation();

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

    console.log(currentTracks)
    if (currentTracks.length!==0){
        const trackInfo  = currentTracks[songid].track;
        setTrackDetail(trackInfo, songid)
    }

    const nextClicked = () => {
        const currentVal= parseInt(songid)
        console.log(currentTracks.length)
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

    return(
    <div className='sectionsSongs'>
        <div className="exit">
            <div></div>
            <button onClick={() => navigate("/garden")}>
                <span  className="close-btn"></span>
            </button>
        </div>
            {trackDetail && <Detail {...trackDetail} location={location.pathname} tracks={audios} trackIndex={audioDetail} about={flowerIndex[id].songsdetail[0]} titles={flowerIndex[id].songstitle[0]} />}
        <div className="progressNav">
        <button className='prev'onClick={prevClicked}>
            previous
            </button>
            <p>{parseInt(songid)+1}/{currentTracks.length}</p>
            <button className='prev' onClick={nextClicked}>
                next
            </button>
        </div>
    </div>
    )
}
export default SongDetail