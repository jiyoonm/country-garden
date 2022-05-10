import React, { useState, useEffect, useRef } from "react";
import AudioControls from "./AudioControls";


const AudioPlayer = ({location, tracks,trackIndex, image, title, artist }) => {
  // State
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [color, setColor] = useState(false);

  // Destructure for conciseness
  const audioSrc = tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;
  useEffect(() => {
    if (location==='/'|| location==='/garden'){
     setColor(false)
    }
    else{
      setColor(true)
    }
   }, [location])

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage},${color ? 'rgba(0, 0, 0, 0.2))' :'rgba(198,198, 198, 0.6))' }, color-stop(${currentPercentage}, rgba(0, 176, 179, 0.0)))

  `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        // toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  // const toPrevTrack = () => {
  //   if (trackIndex - 1 < 0) {
  //     setTrackIndex(tracks.length - 1);
  //   } else {
  //     setTrackIndex(trackIndex - 1);
  //   }
  // };

  // const toNextTrack = () => {
  //   if (trackIndex < tracks.length - 1) {
  //     setTrackIndex(trackIndex + 1);
  //   } else {
  //     setTrackIndex(0);
  //   }
  // };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [trackIndex]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
    <div className="audio-player">
            <AudioControls
            color={color}
          isPlaying={isPlaying}
          onPlayPauseClick={setIsPlaying}
        />
      <div className="track-info">
        {/* <img
          className="artwork"
          src={image}
          // alt={`track artwork for ${title} by ${artist}`}
        /> */}
        <p className="title">{title}</p>
  

        <input
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          className={`slider ${color ? '' :'white-outline' }`}
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
<p className="time">0:{Math.round(trackProgress)<10? "0"+Math.round(trackProgress):Math.round(trackProgress)}/0:30</p>

      </div>
    </div>
    
          <p className="artist"><i>{artist}</i></p>

   </div>
  );
};

export default AudioPlayer;
