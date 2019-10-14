import React, { useState, useEffect } from 'react';
import './App.scss';
import logo from './img/tmhas-logo.png';
import Video from './components/Video'

function App() {
  const [isVertical, setIsVertical] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerHeight > window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <div className="App">
      <div className="landingBG"></div>
      <div className={isVertical ? "landing vertical" : "landing"}>
        <div className={"landingLeft"}>
          <img src={logo} alt="TMHAS logo"/>
        </div>
        <div className="landingRight">
          <h1>PARTICIPATORY BUDGETING</h1>
          <h2>→ Cole Has a Soul</h2>
          <h2>→ Auraria Campus</h2>
          <h1>ART INSTALLATION</h1>
          <h1>PRESS</h1>
        </div>
      </div>
      <div className="videoWall">

        <div className="videoRow">
          <p>Click screen to turn audio on & off</p>
        </div>

        <div className="videoRow">
          <Video
            url="https://player.vimeo.com/video/286610881"
            width={380}
            height={210}
          />
        </div>

        <div className="videoRow">
          <Video
            url="https://player.vimeo.com/video/287697245"
            width={313}
            height={170}
          />
          <Video
            url="https://player.vimeo.com/video/286610881"
            width={313}
            height={170}
          />
        </div>

        <div className="videoRow">
          <Video
            url="https://player.vimeo.com/video/287697245"
            width={502}
            height={276}
          />
          <Video
            url="https://player.vimeo.com/video/286610881"
            width={502}
            height={276}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
