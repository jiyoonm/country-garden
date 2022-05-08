import React, {useEffect, useContext} from "react";
import { Html } from '@react-three/drei'
import Listbox from './Listbox';
import { Credentials } from '../Credentials';
import useStore from "../appStore";
import Detail from './Detail';


export default function Overlay({ navigate }) {
  const spotify = Credentials();  

  // const { playlist, setPlaylist } = useContext(UserContext);
  const token = useStore((state) => state.token);
  const setToken = useStore((state) => state.setToken);
  const tracks =  useStore((state) => state.tracks);
  const playlist =  useStore((state) => state.playlist);
  const setPlaylist =  useStore((state) => state.setPlaylist);

  const flowerName =  useStore((state) => state.flowerName);

  const audios =  useStore((state) => state.audios);
  const setTracks = useStore((state) => state.setTracks);
  const trackDetail = useStore((state) => state.trackDetail);
  const audioDetail = useStore((state) => state.audioDetail);
  const setTrackDetail = useStore((state) => state.setTrackDetail);

    useEffect(() => {
       setToken();
      }, [spotify.ClientId, spotify.ClientId]); 

    useEffect(() => {
      console.log(audios,tracks)
      setTracks(token, playlist).then(
      console.log(audios,tracks))
      }, [token, playlist]); 
   
    const listboxClicked = val => {
      console.log('hi')
      const currentTracks = [...tracks];
      const trackInfo = currentTracks[val].track;
      navigate(`/${flowerName}/${val}`)
      setTrackDetail(trackInfo, val);
    }

  return (
    <group>
     {/* {tracks&& <Listbox items={tracks} clicked={listboxClicked}  />} */}
    </group>

  )
}
