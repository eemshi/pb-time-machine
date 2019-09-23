import React, { useState, useEffect } from 'react';
import './App.scss';

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
      <div className={isVertical ? "landing vertical" : "landing"}>
        <div className={"landing-left"}>
          <img src="/img/tmhas-logo.png" alt="TMHAS logo"/>
        </div>
        <div className="landing-right">
          <h1>PARTICIPATORY BUDGETING</h1>
          <h2>→ Cole Has a Soul</h2>
          <h2>→ Auraria Campus</h2>
          <h1>ART INSTALLATION</h1>
          <h1>PRESS</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
