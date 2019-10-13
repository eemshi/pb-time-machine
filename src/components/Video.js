import React, { useRef, useState } from 'react';
import '../App.scss';
import ReactPlayer from 'react-player';

const Video = ({url, width, height}) => {

  const [muted, setMuted] = useState(true)

  const player = useRef(null)

  const _handleVideoClick = () => {
    setMuted(!muted)
    // player.current.seekTo(0)
  }

  // screenfull.request(findDOMNode(player.current))

  return (
    <div>
      <div className="iframeContainer">
        <ReactPlayer
          ref={player}
          url={url}
          width={width}
          height={height}
          muted={muted}
          volume={1}
          loop={true}
          playing
        />
      </div>
      <div className="videoLink" onClick={_handleVideoClick}>
      </div>
    </div>
  )
}

export default Video;
