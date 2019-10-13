import React, { useRef, useState } from 'react';
import '../App.scss';
import ReactPlayer from 'react-player';
import { Icon, Modal } from 'antd';
import 'antd/dist/antd.css';

const Video = ({url, width, height}) => {

  const [visible, setVisible] = useState(false)
  const [muted, setMuted] = useState(true)
  const player = useRef(null)

  const _toggleModal = () => {
    setVisible(!visible)
    setMuted(true)
  }

  const _toggleMuted = async () => {
    setMuted(!muted)
  }

  // screenfull.request(findDOMNode(player.current))

  const _renderModal = (
    <Modal
      visible={visible}
      closable={true}
      footer={null}
      onCancel={_toggleModal}
    >
      <iframe
        title="vimeo-player"
        src={`${url}?autoplay=1`}
        width={640}
        height={360}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </Modal>
  )

  return (
    <div style={{position: 'relative'}}>
      {_renderModal}
      <div className="iframeContainer">
        {/* <iframe
          title="vimeo-player"
          src={`${url}?background=1`}
          width={width}
          height={height}
          frameBorder="0"
          allowFullScreen
        ></iframe> */}
        <ReactPlayer
          ref={player}
          width={width}
          height={height}
          url={url}
          // controls={true}
          muted={muted}
          volume={1}
          playing
        />
        <Icon onClick={_toggleModal} type="fullscreen" />
      </div>
      <div className="videoOverlay" onClick={_toggleMuted}>
      </div>
    </div>
  )
}

export default Video;
