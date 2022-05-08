import React from 'react';
import AudioPlayer from './AudioPlayer';
import flowerIndex from './data/flowerIndex.json'

const Detail = ({album, artists, name, tracks, trackIndex}) => {
      return (
        <div className="detail" >
            <h1>  {titles[trackIndex]}</h1>

            <AudioPlayer tracks={tracks}trackIndex={trackIndex} image={album.images[0].url} title={name} artist={artists[0].name}/>
            <p>  {about[trackIndex]}</p>

           
        </div>
    );
}

export default Detail;