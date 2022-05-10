import React, {useEffect} from "react";

import useStore from "../appStore";


export default function Overlay({ }) {

  // const { playlist, setPlaylist } = useContext(UserContext);
  const token = useStore((state) => state.token);
  const setToken = useStore((state) => state.setToken);
  const tracks =  useStore((state) => state.tracks);
  const playlist =  useStore((state) => state.playlist);


  const audios =  useStore((state) => state.audios);
  const setTracks = useStore((state) => state.setTracks);
  
    useEffect(() => {
       setToken();
      }, []); 

    useEffect(() => {
      setTracks(token, playlist)
      }, [token, playlist]); 
   
    // const listboxClicked = val => {
    //   console.log('hi')
    //   const currentTracks = [...tracks];
    //   const trackInfo = currentTracks[val].track;
    //   navigate(`/${flowerName}/${val}`)
    //   setTrackDetail(trackInfo, val);
    // }

  return (
    <group>
     {/* {tracks&& <Listbox items={tracks} clicked={listboxClicked}  />} */}
    </group>

  )
}
