// import React, {  useEffect,Suspense,useContext } from "react"
// import { BrowserRouter as Router, useNavigate, useParams} from "react-router-dom";

// import useStore from "../appStore";
// import Detail from '../components/Detail';
// import flowerIndex from '../data/flowerIndex.json'

// function SongDetail(){
    

//     return(
//     <div className='navPage'>
//         <div className="help">
//                 {!help && <button onClick={() => set({ help: true })}>i</button>}
//                 <div className={`popup ${help ? 'open' : ''}`}>
//                 <button className="popup-close" onClick={() => set({ help: false })}>
//                     i
//                 </button>
//                 <div className="popup-content">
//                     <Keys />
//                 </div>
//                 </div>
//             </div>



//         <div className="exit">
//             <div></div>
//             <button onClick={() => navigate("/garden")}>
//                 <span  className="close-btn"></span>
//             </button>
//         </div>
//             {trackDetail && <Detail {...trackDetail} tracks={audios} trackIndex={audioDetail} about={flowerIndex[id].songsdetail[0]} titles={flowerIndex[id].songstitle[0]} />}
//         <div className="progressNav">
//         <button onClick={prevClicked}>
//             previous
//             </button>
//             <p>{parseInt(songid)+1}/{currentTracks.length}</p>
//             <button onClick={nextClicked}>
//                 next
//             </button>
//         </div>
//     </div>
//     )
// }
// export default SongDetail