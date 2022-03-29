import React from 'react'
import {VideoContainer} from "./VideoContainer.element";
import GIF from "/home/manel/reactProject/nftprj/src/assets/Home Video.mp4";
const CoverVideo = () => {
  return (
    <VideoContainer>
    <video src={GIF} type="video/mp4" /* autoPlay muted loop *//>
    </VideoContainer>
  )
}

export default CoverVideo