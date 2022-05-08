import React from "react";

const AudioControls = ({color,
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick
}) => (
  <div className="audio-controls">

      <button
        type="button"
        className={`pause ${color ?  '':'white-outline' }`}
        onClick={() => isPlaying? onPlayPauseClick(false):onPlayPauseClick(true)}
        aria-label="Pause"
      >
        <a className={`button ${color ? '' :'white-button' } ${isPlaying ? 'paused' :'' }`}
        ></a>
      </button>
  

  </div>
);

export default AudioControls;
