import React from 'react';
import AudioPlayer from './AudioPlayer';

const Detail = ({location, album, artists, name, tracks, trackIndex, about, titles}) => {

    return (

        <div className="songWords">
            <h1>  {titles}</h1>
            <AudioPlayer location={location} tracks={tracks}trackIndex={trackIndex} image={album.images[0].url} title={name} artist={artists[0].name}/>
            <p> {about}</p>
        </div>
      // </div>
    );
}

export default Detail;