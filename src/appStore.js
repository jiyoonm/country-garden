import create from "zustand";
import axios from 'axios';
// import { Credentials } from './Credentials';
// const spotify = Credentials();  

const useStore = create((set) => ({
token:'',
tracks: [],
audios: [],
trackDetail: null,
audioDetail: null,
playlist:'',
flowerName:'',
isVisible: false,
isGarden: false,

setToken: async () => {
    const response = await axios('https://accounts.spotify.com/api/token', {
        headers: {
          'Content-Type' : 'application/x-www-form-urlencoded',
          'Authorization' : 'Basic ' + btoa(process.env.REACT_APP_CLIENT_ID+ ':' + process.env.REACT_APP_CLIENT_SECRET)      
        },
        data: 'grant_type=client_credentials',
        method: 'POST'
      })
    set({ token: response.data.access_token })
  },
setTracks: async (token,playlist) => {
  try {
const response = await  axios(`https://api.spotify.com/v1/playlists/${playlist}/tracks?limit=10`, {
    method: 'GET',
    headers: { 'Authorization' : 'Bearer ' + token}
  })
  
  set({ tracks: response.data.items, 
    audios: response.data.items.map((item)=>
    item.track.preview_url)
    })}
    catch(error) {
      console.log(error)
}   }
    ,

setTrackDetail:  (trackInfo,val) => {
    set({ trackDetail: trackInfo, audioDetail: val,  })},
setPlaylist:  (val,name) => {
      set({ playlist: val, flowerName: name })},
    setVisible:  (bool) => {
      set({ isVisible: bool })},
      setGarden:  (bool) => {
      set({ isGarden: bool  })}
  


        


}));

export default useStore;